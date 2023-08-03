import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WebbitHomeComponent } from './webbit-home/webbit-home.component';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'webbit', component: WebbitHomeComponent, canActivate: [CanActivateGuard] },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
