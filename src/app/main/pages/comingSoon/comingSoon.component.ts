import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './comingSoon.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComingSoonComponent { }
