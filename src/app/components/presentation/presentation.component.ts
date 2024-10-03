import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StainComponent } from '@assets/svg/stain/stain.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [
    CommonModule,
    StainComponent,
    TranslateModule,
  ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationComponent { }
