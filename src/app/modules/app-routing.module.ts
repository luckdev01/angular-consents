import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectedConsentsComponent } from '../views/collected-consents/collected-consents.component';
import { GiveConsentComponent } from '../views/give-consent/give-consent.component';

const routes: Routes = [
  { path: 'give-consent', component: GiveConsentComponent },
  { path: 'collected-consents', component: CollectedConsentsComponent },
  {
    path: '',
    redirectTo: 'collected-consents',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
