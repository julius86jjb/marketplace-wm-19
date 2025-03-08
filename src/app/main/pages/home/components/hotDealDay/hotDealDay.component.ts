import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HotDealDayCountdownComponent } from "./components/hotDealDayCountdown/hotDealDayCountdown.component";

@Component({
    selector: 'home-hot-deal-day',
    imports: [
        CommonModule,
        HotDealDayCountdownComponent
    ],
    templateUrl: './hotDealDay.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotDealDayComponent { }
