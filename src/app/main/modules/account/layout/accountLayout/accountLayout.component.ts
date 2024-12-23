import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-account-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './accountLayout.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AccountLayoutComponent implements OnInit, OnDestroy{
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'my-account');

  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'my-account');
  }
}
