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
import { LogInSectionComponent } from './log-in-section/log-in-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponentSectionComponent } from './log-in-component-section/log-in-component-section.component';
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";

import { BrowserAnimationsModule }
    from "@angular/platform-browser/animations";
import { ProductSelectSingleViewComponent } from './product-select-single-view/product-select-single-view.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { MyProfileComponent } from './account/my-profile/my-profile.component';
import { AddressComponent } from './account/address/address.component';

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
    SubscribeSectionComponent,
    LogInSectionComponent,
    LogInComponentSectionComponent,
    ProductSelectSingleViewComponent,
    MyAccountComponent,
    MyProfileComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule,DialogModule,
            ButtonModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
