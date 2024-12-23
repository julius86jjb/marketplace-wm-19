import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { HotDealDayComponent } from "./components/hotDealDay/hotDealDay.component";

@Component({

  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HotDealDayComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'home');

  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'home');
  }



}
