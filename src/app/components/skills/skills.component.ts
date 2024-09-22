import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skill } from '@shared/interfaces/skill';
import { DropdownComponent } from '@shared/ui/dropdown/dropdown.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    DropdownComponent,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent { 
  skills: skill[] = [
    {
      title: 'Frontend',
      description: 'Front-end development is the bridge that connects ideas with end-users, bringing the product to life and ensuring a functional and interactive experience.',
      images: ['angular.png'],
    },
    {
      title: 'Backend',
      description: 'Back-end development is the foundation of a product, ensuring that the server, database, and application work together seamlessly.',
      images: ['nodejs.png'],
    },
    {
      title: 'Database',
      description: 'Database management is essential to store and retrieve data efficiently, ensuring that the product is scalable and performant.',
      images: ['mongodb.png'],
    },
    {
      title: 'Devops',
      description: 'DevOps is the practice of combining software development and IT operations to streamline the development process and ensure a high-quality product.',
      images: [''],
    }
  ];
}
