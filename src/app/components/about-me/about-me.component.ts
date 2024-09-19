import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent { }
