import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FeedComponent } from './components/feed/feed.component';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/forgotpassword', component: ForgotPasswordComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'feed', component: FeedComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
