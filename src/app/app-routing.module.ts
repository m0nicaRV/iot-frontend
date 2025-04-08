import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CreateComponent } from './sala/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './sala/index/index.component';
import { ViewComponent } from './sala/view/view.component';
import { MineComponent } from './sala/mine/mine.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path:'login',component:SigninComponent},
  {path:'register',component:SignupComponent},
  {path:'profile',component:UserProfileComponent},
  {path:'create',component:CreateComponent},
  {path:'sala',component:IndexComponent},
  {path:'sala/:id',component:ViewComponent},
  {path: 'mine', component: MineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
