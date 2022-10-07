import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { SwiperModule } from 'swiper/angular';
import { SearchBoxModule } from '../search-box/search-box.module';
import { CardModule } from '../card/card.module';
import { PaginationModule } from '../pagination/pagination.module';



@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    SearchBoxModule,
    CardModule,
    PaginationModule

  ],exports: [ContentComponent]
})
export class ContentModule { }
