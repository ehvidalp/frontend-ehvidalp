import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoftSkillsComponent {
  softSkills = ['communication', 'leadership', 'team_work', 'critical_thinking', 'creative', 'problem_solving']; 
}
