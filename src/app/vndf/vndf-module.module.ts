import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { VndfComponent } from './vndf.component';
import { ContentModule } from './content/content.module';
import { HeadModule } from './head/head.module';
import { SwiperModule } from 'swiper/angular';
import { VndfRoutingModule } from './vndf-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [ VndfComponent],
  imports: [
    CommonModule,
    NavBarModule,
    ContentModule,
    HeadModule,
    VndfRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ]
})
export class VndfModuleModule { }
