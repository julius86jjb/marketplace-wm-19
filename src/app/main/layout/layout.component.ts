import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "./headers/header.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { StickyFooterComponent } from "../components/stickyFooter/stickyFooter.component";
import { ScrollToTopComponent } from "../components/scrollToTop/scrollToTop.component";
import { MobileMenuComponent } from "../components/mobileMenu/mobileMenu.component";
import { NewsletterComponent } from "../components/newsletter/newsletter.component";
import { QuickViewComponent } from "../components/quickView/quickView.component";
import HomeComponent from '../pages/home/home.component';

@Component({
    selector: 'app-layout',
    imports: [
        CommonModule,
        HeaderComponent,
        RouterModule,
        FooterComponent,
        StickyFooterComponent,
        ScrollToTopComponent,
        MobileMenuComponent,
        NewsletterComponent,
        QuickViewComponent
    ],
    templateUrl: './layout.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class LayoutComponent { }
