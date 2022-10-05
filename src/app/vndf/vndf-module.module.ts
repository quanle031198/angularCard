import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import { HeadComponent } from './head/head.component';
import { SearchBoxComponent } from './search-box/search-box.component';
// import { ListCardComponent } from './list-card/list-card.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    NavBarComponent,
    ContentComponent,
    CardComponent,
    HeadComponent,
    SearchBoxComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    // HeaderModuleModule
  ]
})
export class VndfModuleModule { }
