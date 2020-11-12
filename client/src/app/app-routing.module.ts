import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/adming/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  
  { path: 'course/:id', component: DetailsComponent },
  { path: 'admin/list', component: ListComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent}, // TODO: only users auth
  { path: '**', component: Page404Component }

];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
