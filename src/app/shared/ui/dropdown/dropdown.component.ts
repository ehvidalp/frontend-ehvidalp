import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ArrowComponent } from '@assets/svg/arrow/arrow.component';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    ArrowComponent,
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  expandDropdown = signal(false);

  setDropdownState() {
    this.expandDropdown.update((state) => !state);
  }
 }
