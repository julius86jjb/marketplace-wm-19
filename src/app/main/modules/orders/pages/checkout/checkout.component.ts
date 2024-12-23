import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './checkout.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckoutComponent { }
