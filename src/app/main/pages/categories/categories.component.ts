import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './categories.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CategoriesComponent { }
