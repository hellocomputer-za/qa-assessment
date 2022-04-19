import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurWorkComponent,
    HomePageComponent,
    FooterComponent,
    TopNavBarComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
