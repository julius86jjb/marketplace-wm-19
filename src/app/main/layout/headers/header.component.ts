import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopHeaderComponent } from "./topHeader/topHeader.component";
import { MainHeaderComponent } from "./mainHeader/mainHeader.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TopHeaderComponent,
    MainHeaderComponent,
    NavbarComponent
],
  templateUrl: './header.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { }
