import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent {
  certifications = [
    {
      image: 'github-foundations.png',
      name: 'Github Foundations',
      link: 'https://www.credly.com/badges/4315ac42-842c-4c86-ac15-8e1755839325/public_url'
    },
  ]
}
