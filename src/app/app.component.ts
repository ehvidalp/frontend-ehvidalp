import { Component } from '@angular/core';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { CertificationsComponent } from "./components/certifications/certifications.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AboutMeComponent,
    ContactMeComponent,
    PresentationComponent,
    ProjectsComponent,
    SkillsComponent,
    SoftSkillsComponent,
    CertificationsComponent,
    HeaderComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ehvidalp';
}
