import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes propios
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';




const routes: Routes = [

  {path: '',component:HomeComponent},
  {path: 'create',component:CreateComponent,

  ...canActivate(() => redirectUnauthorizedTo(['']))
    },
  {path: 'show',component:ShowComponent},
  {path: 'edit/:id',component:EditComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


