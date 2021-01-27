import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FeedComponent } from './components/feed/feed.component';
import { FriendsComponent } from './components/friends/friends.component';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserListComponent } from './components/users/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/forgotpassword', component: ForgotPasswordComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'order/:id', component: OrderDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
