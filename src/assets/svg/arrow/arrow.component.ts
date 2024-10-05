import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowComponent { }
