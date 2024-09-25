import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoftSkillsComponent { 
  softSkills = signal(['Communication', 'Leadership', 'Team work', 'Critical thinking', 'Creative', 'Problem solving']);
}
