import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './vndf/card/card.component';
import { ContentComponent } from './vndf/content/content.component';
import { HeadComponent } from './vndf/head/head.component';
import { NavBarComponent } from './vndf/nav-bar/nav-bar.component';
import { SearchBoxComponent } from './vndf/search-box/search-box.component';
import { VndfComponent } from './vndf/vndf.component';
import { PaginationComponent } from './vndf/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    VndfComponent,
    NavBarComponent,
    HeadComponent,
    ContentComponent,
    SearchBoxComponent,
    CardComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
