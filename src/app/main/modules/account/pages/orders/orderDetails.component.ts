import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './orderDetails.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrderDetailsComponent { }
