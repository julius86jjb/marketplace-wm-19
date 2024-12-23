import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './newsletter.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterComponent { }
