import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-sticky-footer',
    imports: [
        CommonModule,
    ],
    templateUrl: './stickyFooter.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickyFooterComponent { }
