import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { SwiperModule } from 'swiper/angular';
import { SearchBoxModule } from '../search-box/search-box.module';
import { CardModule } from '../card/card.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    SearchBoxModule,
    CardModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,

  ],exports: [ContentComponent]
})
export class ContentModule { }
