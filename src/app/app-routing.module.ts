import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VndfComponent } from './vndf/vndf.component';
import { HandleRouterGuard } from './guard/handle-router.guard';

const routers: Routes = [
  {path: '',pathMatch: 'full', redirectTo:'main'},
  {path: 'login', component:LoginComponent},
  {path: 'main',
   component:VndfComponent, 
  //  canActivate: [HandleRouterGuard]
  },

  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
