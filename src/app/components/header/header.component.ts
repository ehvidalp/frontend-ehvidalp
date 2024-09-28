import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorldIconComponent } from '@assets/svg/world/world.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Languages } from '@shared/interfaces/languages.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    WorldIconComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit { 
  private translateService = inject(TranslateService);

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

}
