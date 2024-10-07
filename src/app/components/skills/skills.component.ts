import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { skill, Technology } from '@shared/interfaces/skill.interface';
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
  skills: skill[] = [];


  ngOnInit(): void {
    // set skills
    this.skills = [
      {
        key: 'frontend',
        technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript',
          { value: 'Angular', certification: true }, 'Vue', 'Ngrx', 'Rxjs', 'Vuex', 'Pinia', 'Vite', 'webpack']
          .map(this.formatSkill)
      },
      {
        key: 'backend',
        technologies: ['JavaScript', 'TypeScript', { value: 'Node.js', certification: true }, 'Express', 'JWT']
          .map(this.formatSkill)
      },
      {
        key: 'databases',
        technologies: [{ value: 'MongoDB', certification: true }, { value: 'PostgreSQL', certification: true }, 'Firestore']
          .map(this.formatSkill)
      },
      {
        key: 'devops',
        technologies: ['Git', {value: 'Github', certification: true}, 'AWS', 'Google Cloud'].map(this.formatSkill)
      }
    ]
  }

  formatSkill(technology: Technology | string): Technology {
    return typeof technology === 'string' ? { value: technology, certification: false } : technology;
  }

  goToCertification(technology: Technology): void {
    console.info('Go to certification for', technology);
  }
}
