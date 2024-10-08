import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project } from '@shared/interfaces/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent { 
  myProjects: Project[] = [
    {
      photos: ['project-1.png', 'project-2.png', 'project-3.png'],
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur. Turpis ornare cras aliquam mattis nisi bibendum enim adipiscing. Nunc vitae amet luctus urna nulla egestas id. Pulvinar fermentum pulvinar facilisis bibendum vestibulum semper in sed non. Quis purus amet nunc sed sagittis orci.',
      tools: ['Angular', 'Firebase'],
      links: [
        {
          name: 'View Project',
          url: 'https://www.example.com/project1'
        }
      ]
    },
    // {
    //   photos: ['project2.png'],
    //   title: 'Project 2',
    //   description: 'This is a description of project 2',
    //   tools: ['React', 'Node.js'],
    //   links : [
    //     {
    //       name: 'View Project',
    //       url: 'https://www.example.com/project2'
    //     }
    //   ]
    // }
  ]
}
