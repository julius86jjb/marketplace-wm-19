import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'hot-deal-day-countdown',
    imports: [
        CommonModule,
    ],
    template: `
    <div  class="product-countdown-container flex-wrap">
        <label class="mr-2 text-default">Offer Ends In:</label>
        <div class="product-countdown countdown-compact"
            data-until="2022, 12, 31" data-compact="true">
            629 days, 11: 59: 52</div>
    </div>
  `,
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotDealDayCountdownComponent { }
