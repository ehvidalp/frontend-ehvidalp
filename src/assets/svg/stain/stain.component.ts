import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stain',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './stain.component.html',
  styleUrl: './stain.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StainComponent { }
