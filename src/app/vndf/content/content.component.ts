import { Component, ViewEncapsulation, OnInit, ViewChild  } from "@angular/core";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { SearchBoxComponent } from "../search-box/search-box.component";
import { DisplayPrdService } from "src/app/service/display-prd.service";
import { Products } from "src/app/interface/products";


// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None

})



export class ContentComponent implements OnInit {
  @ViewChild(SearchBoxComponent) childSearch: SearchBoxComponent | any;

  searchTxt:string = '';
  p: number = 1;
  thumbsSwiper: any;
  listOfItems: any = [];


  catObj = [{name:'Flavour',slug:'flavour'},{name:'VDU', slug:'vdu'},{name:'VNF Indicator', slug:'vnf'} ]
  nameCate = ["flavour", "vdu", "vnf"];
  constructor(public productService: DisplayPrdService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((response)=>{
      this.listOfItems = response.data;
    })

  }

  searchEvent(searchValue: any){
    this.searchTxt = searchValue;
    if (this.searchTxt == ''){
      this.ngOnInit();
    }else {
      this.listOfItems = this.listOfItems.filter((res: any) => {
        return res.name.trim().toUpperCase().match(this.searchTxt.trim().toUpperCase());
      });
    }
  }
}
