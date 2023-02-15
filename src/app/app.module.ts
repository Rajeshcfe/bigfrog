import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreSectionComponent } from './explore-section/explore-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { HeaderAreaComponent } from './header/header-area/header-area.component';
import { KidsSectionComponent } from './kids-section/kids-section.component';
import { MenSectionComponent } from './men-section/men-section.component';
import { SocialMediaSectionComponent } from './social-media-section/social-media-section.component';
import { SubscribeSectionComponent } from './subscribe-section/subscribe-section.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { WomenSectionComponent } from './women-section/women-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAreaComponent,
    TopSectionComponent,
    MenSectionComponent,
    FooterSectionComponent,
    WomenSectionComponent,
    KidsSectionComponent,
    ExploreSectionComponent,
    SocialMediaSectionComponent,
    SubscribeSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
