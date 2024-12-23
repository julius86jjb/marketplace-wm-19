import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'header-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styles: `
    :host {
      display: block;
    }
    .hidden {
      display:none;
    }
    .header-bottom:not(.fixed) .category-dropdown > a {
      background-color: #fff;
    }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {ngSkipHydration: 'true'},
})
export class NavbarComponent {

  public showCategories = signal<boolean>(false);

  toogleCategories() {
    this.showCategories.set(!this.showCategories());
  }
 }
