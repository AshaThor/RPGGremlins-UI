import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewCharacterComponent } from './components/view-character/view-character.component'
import { CallbackComponent } from './components/callback/callback.component'
//import { AuthGuard } from './services/auth.guard'
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin/view/:id',
    component: ViewCharacterComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    //canActivate: [AuthGuard]
  }, 
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
