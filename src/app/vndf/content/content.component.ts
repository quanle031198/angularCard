import { Component, ViewEncapsulation, OnInit  } from "@angular/core";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { PaginateData } from "src/app/interface/PaginateData";
import { Card } from "src/app/interface/Card";


// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None

})



export class ContentComponent implements OnInit {
  thumbsSwiper: any;

  currentPageNew: number | undefined;

  primitiveData: Array<Card> = [];
  listOfItems: any = [];
  currentPage = 1;
  paginatedData: any;
  dataByCategory: any;
  theNewCurrentPage :any;
  totalPage = 0;
  arrConect :any;


  catObj = [{name:'Flavour',slug:'flavour'},{name:'VDU', slug:'vdu'},{name:'VNF Indicator', slug:'vnf'} ]
  nameCate = ["flavour", "vdu", "vnf"];
  constructor() { }

  ngOnInit(): void {
    this.primitiveData = this.renderSampleData();
    this.filterByCategory();
    this.arrConect = this.dataByCategory
  }

  renderSampleData = (amountOfModels = 80
    ): Array<Card> => {
        const nameCate = ["flavour", "vdu", "vnf"];
        const fNamePrd = ['ff', 'gg', 'hfs', 'si', 'fa', 'vf', 'lmao', 'vfc', 'peds', 'cr7', 'm10', 'mp3'];
        const lNamePrd = ['kaw', 'porche', 'ferrai', 'lambor', 'mustang', 'toyota', 'lexus', 'kfc', 'nike'];

        let models = [];
        for (let i = 0; i < amountOfModels; i++) {
            const randomCate = Math.floor(Math.random() * nameCate.length);
            const randomFn = Math.floor(Math.random() * fNamePrd.length);
            const randomLn = Math.floor(Math.random() * lNamePrd.length);
            const id = i + 1;

            let card = {
                id: id,
                name: lNamePrd[randomLn] + fNamePrd[randomFn],
                chip: "1 vCPU x86",
                memory: "1TB HDD",
                ram: "1 vCPU x86",
                motion: 4,
                category: nameCate[randomCate]
            }

            models.push(card);
        }
        return models;
    }

    paginate(models: any[], offset: number, limit = 8) :PaginateData {
      let result = {
          "totalPage": 0,
          "data": Array()
      }

      const startIndex = (offset - 1) * limit;
      const endIndex = startIndex + limit;

      result.data = models.slice(startIndex, endIndex);
      result.totalPage = Math.ceil(models.length / limit);
      return result;
    }



  filterByCategory(category: string = 'vdu'){
    this.dataByCategory = this.primitiveData.filter((data: Card) => {
      return data.category === category;
    });

    this.currentPage = 1;
    this.paginatedData = this.paginate(this.dataByCategory, this.currentPage);
    this.listOfItems = this.paginatedData.data;
    this.totalPage = this.paginatedData.totalPage;
  }

  handleNumPage(newCurrent:any){
    this.theNewCurrentPage = newCurrent;
    this.paginatedData = this.paginate(this.arrConect, newCurrent);
    this.listOfItems = this.paginatedData.data;
  }

  searchEvent(dataProductSearch: any){
    this.arrConect = dataProductSearch
    this.paginatedData = this.paginate(dataProductSearch,this.currentPage);
    this.listOfItems = this.paginatedData.data;
    this.totalPage = this.paginatedData.totalPage;
  }

  trans(i: any) {
    // console.log("TRANSEND: ", i.activeIndex);
  }
}
