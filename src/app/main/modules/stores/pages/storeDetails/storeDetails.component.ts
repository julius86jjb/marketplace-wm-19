import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-store-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './storeDetails.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StoreDetailsComponent { }
