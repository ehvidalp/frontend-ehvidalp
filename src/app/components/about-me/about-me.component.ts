import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownComponent } from '@shared/ui/dropdown/dropdown.component';

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
