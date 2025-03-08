import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-compare',
    imports: [
        CommonModule,
    ],
    templateUrl: './compare.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CompareComponent implements OnInit, OnDestroy{
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'compare-page');

  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'compare-page');
  }
 }
