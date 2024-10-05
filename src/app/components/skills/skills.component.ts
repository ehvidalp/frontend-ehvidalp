import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { skill } from '@shared/interfaces/skill';
import { DropdownComponent } from '@shared/ui/dropdown/dropdown.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    DropdownComponent,
    TranslateModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent { 
  skills: skill[] = [
    {
      key: 'frontend',
      images: ['angular.png'],
      technologies: ['HTML', 'Css', 'Scss', 'JavaScript', 'TypeScript', 'Angular', 'Vue', 'Figma' ]
    },
    {
      key: 'backend',
      images: ['nodejs.png'],
      technologies: []
    },
    {
      key: 'databases',
      images: ['mongodb.png'],
      technologies: []
    },
    {
      key: 'devops',
      images: [''],
      technologies: []
    }
  ];
}
