import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-order-complete',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './orderComplete.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrderCompleteComponent { }
