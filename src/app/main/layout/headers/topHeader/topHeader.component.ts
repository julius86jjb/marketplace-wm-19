
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'header-top',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './topHeader.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopHeaderComponent { }
