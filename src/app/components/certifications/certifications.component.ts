import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent { }
