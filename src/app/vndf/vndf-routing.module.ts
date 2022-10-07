import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VndfComponent } from './vndf.component';

const routers: Routes = [
  {path: '',pathMatch: 'full', redirectTo:'main'},
  {path: 'main', component:VndfComponent},

  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ]
})
export class VndfRoutingModule { }
