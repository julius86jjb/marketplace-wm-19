import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './wishlist.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WishlistComponent { }
