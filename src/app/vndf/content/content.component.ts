import { Component, ViewEncapsulation, OnInit,ElementRef, ViewChild  } from "@angular/core";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { SearchBoxComponent } from "../search-box/search-box.component";
import { DisplayPrdService } from "src/app/service/display-prd.service";
import { Products } from "src/app/interface/products";

// new import
import { of, Subject } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
  switchMap
} from "rxjs/operators";
import { fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
// end

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


  private subjectKeyUp = new Subject<any>();
  
  constructor(public productService: DisplayPrdService) { }

  ngOnInit(): void {

    this.displayProduct();
    
    this.subjectKeyUp.pipe(debounceTime(1000)).subscribe((d)=>{
      console.log(d);
    this.getPrdS(d);
      
    })
  }

  displayProduct(){
    this.productService.getProducts().subscribe((response)=>{
      this.listOfItems = response.data;
    })
  }

  searchEvent(searchValue: any){
    this.searchTxt = searchValue;

    if (searchValue == ''){
      this.displayProduct();
    }else {
    this.subjectKeyUp.next(searchValue);
    }
  }

  getPrdS( value: any){
    this.productService.getPrdSearch(value).subscribe((d)=> {
      this.listOfItems = d.data
    },error => {
      console.log(error);
      
    })
  }
}
