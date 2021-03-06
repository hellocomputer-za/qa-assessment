import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: HomePageComponent
  },
  // {
  //   path: 'about-us',
  //   component: AboutUsComponent
  // },
  // {
  //   path: 'our-service',
  //   component: OurServicesComponent
  // },
  // {
  //   path: 'our-work',
  //   component: OurWorkComponent
  // },
  // {
  //   path: 'register',
  //   component: FormComponent
  // },
];

const routerOptions : ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
