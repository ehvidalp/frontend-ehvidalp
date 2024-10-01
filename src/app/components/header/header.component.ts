import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorldIconComponent } from '@assets/svg/world/world.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Languages } from '@shared/interfaces/languages.interface';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    WorldIconComponent,
    LottieComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit { 
  private translateService = inject(TranslateService);
  // Lottie
  lightDarkIconAnimation: AnimationItem | undefined;
  lightDarkIcon: AnimationOptions = {
    path: 'assets/lottie/light-dark-icon.json',
    loop: false,
    autoplay: false,
  };
  // 
  currentTheme= signal('dark');
  isDarkTheme = computed(() => this.currentTheme() === 'dark');
  currentLanguage: Languages = Languages.es;
  listLanguages = signal([
    Languages.en,
    Languages.es,
  ])
  
  ngOnInit(): void {
    this.getDefaultSetting();
  }

  getDefaultSetting(): void {
    const deviceLanguage = navigator.language.split('-')[0] ?? this.currentLanguage;
    this.currentLanguage = deviceLanguage as Languages;
    this.changeLanguage(undefined, deviceLanguage as Languages);
  }

  changeLanguage(event?: Event, language?: Languages): void {
    const lang = language ? language : (event?.target as HTMLSelectElement).value
    this.translateService.use(lang);
  }

  changeTheme(): void {
    this.currentTheme.update((theme) => theme === 'dark' ? 'light' : 'dark');
    this.updateLightDarkIconPosition();
  }

  animationCreated(animationItem: AnimationItem): void {
    animationItem.addEventListener('DOMLoaded', () => {
      this.lightDarkIconAnimation = animationItem;
      this.updateLightDarkIconPosition();
    });
  }

  updateLightDarkIconPosition(): void {
    if(!this.lightDarkIconAnimation) return;
    document.body.classList[this.isDarkTheme() ? 'add' : 'remove']('dark-theme');
    
    this.lightDarkIconAnimation.setDirection(this.isDarkTheme() ? 1 : -1);
    this.lightDarkIconAnimation.play();
  }
}
