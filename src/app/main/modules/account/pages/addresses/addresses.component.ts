import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-addresses',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './addresses.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AddressesComponent { }
