
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styles: `
    :host {
      display: block;
    }
    .login-page .login-popup {
      margin: 4.2rem auto 5rem;
      -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent { }
