import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './User/login-user/login-user.component';
import { HomeComponent } from './User/home/home.component';
import { RegisterUserComponent } from './User/register-user/register-user.component';


const routes: Routes = [
  {path:'',component:LoginUserComponent},
  {path:'home',component:HomeComponent},
  {path:'reg',component:RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
