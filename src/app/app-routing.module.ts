import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes propios
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';
import { LoginComponent } from './components/login/login.component';
import { HomeLoginComponent } from './components/home-login/home-login.component';





const routes: Routes = [

  {path: '',component:ShowComponent},
  {path: 'create',component:CreateComponent},
  {path: 'edit/:id',component:EditComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:LoginComponent},
  {path: 'homeLo',component:HomeLoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
