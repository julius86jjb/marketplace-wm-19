import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-become-vendor',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './becomeVendor.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BecomeVendorComponent { }
