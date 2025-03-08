import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-about-us',
    imports: [
        CommonModule,
    ],
    templateUrl: './aboutUs.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export default class AboutUsComponen implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'about-us');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'about-us');
  }

}
