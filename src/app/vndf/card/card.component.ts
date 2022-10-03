import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";
import { Products } from "src/app/products";
import { SwiperComponent } from "swiper/angular";




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  products:Products[] = []
  // nameCate = ["flavour", "vdu", "vnf"];
  // amountOfModels = 80;
  // fNamePrd = ['ff', 'gg', 'hfs', 'si', 'fa', 'vf', 'lmao', 'vfc', 'peds', 'cr7', 'm10', 'mp3'];
  // lNamePrd = ['kaw', 'porche', 'ferrai', 'lambor', 'mustang', 'toyota', 'lexus', 'kfc', 'nike'];

  // items:any[] = [];
  // pageOfItems: Array<any> | any;
  // renderSampleData = (amountOfModels = 80
  //   ) => {
  //       const nameCate = ["flavour", "vdu", "vnf"];
  //       const fNamePrd = ['ff', 'gg', 'hfs', 'si', 'fa', 'vf', 'lmao', 'vfc', 'peds', 'cr7', 'm10', 'mp3'];
  //       const lNamePrd = ['kaw', 'porche', 'ferrai', 'lambor', 'mustang', 'toyota', 'lexus', 'kfc', 'nike'];

  //       let models = [];
  //       for (let i = 0; i < amountOfModels; i++) {
  //           const randomCate = Math.floor(Math.random() * nameCate.length);
  //           const randomFn = Math.floor(Math.random() * fNamePrd.length);
  //           const randomLn = Math.floor(Math.random() * lNamePrd.length);
  //           const id = i + 1;

  //           let card = {
  //               id: id,
  //               name: lNamePrd[randomLn] + fNamePrd[randomFn],
  //               chip: "1 vCPU x86",
  //               memory: "1TB HDD",
  //               ram: "1 vCPU x86",
  //               motion: 4,
  //               category: nameCate[randomCate]
  //           }

  //           models.push(card);
  //       }
  //       return models;
  //   }
  //   filterByCategory(models: any[], category: any) {

  //     return models.filter((model) => model.category === category);
  // }

  //   paginate(models: any[], offset: number, limit = 8) {
  //     let result = {
  //         "totalPage": 0,
  //         "data": []
  //     }
  //     console.log(models);

  //     const startIndex = (offset - 1) * limit;
  //       // console.log(startIndex)
  //     const endIndex = startIndex + limit;

  //     // result.data = models.slice(startIndex, endIndex);
  //     // result.totalPage = Math.ceil(models.length / limit);
  //     return result;
  // }

  // data = this.renderSampleData();
  // currentPage = 1;
  // // paginate all

  // filterData = this.filterByCategory(this.data, 'flavour');
  // paginateFilterData = this.paginate(this.filterData, 1);

  // filterData1 = this.filterByCategory(this.data, 'vdu');
  // paginateFilterData1 = this.paginate(this.filterData1, 1);

  // filterData2 = this.filterByCategory(this.data, 'vnf');
  // paginateFilterData2 = this.paginate(this.filterData2, 1);

//   render(arr: any[]) {
//     let category;
//     let element = `<div class="row products g-2">`;
//     if (arr.length !== 0) {
//         arr.forEach(value => {
//             category = value.category
//             element += `
//             <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
//             <div class="box-product">
//                 <div class="title-product">
//                      <h4>${value.name} - ${value.category}</h4>
//                  </div>
//                  <div class="describe-product">
//                      <div class="row list-describe">
//                          <div class="col-6 d-flex">
//                              <img src="assets/icon/computer-chip-1.png" alt="">
//                              <p>${value.chip}</p>
//                          </div>
//                          <div class="col-6 d-flex">
//                              <img src="assets/icon/hard-drive-2.png" alt="">
//                              <p>${value.memory}</p>
//                         </div>
//                          <div class="col-6 d-flex">
//                              <img src="assets/icon/computer-ram-1.png" alt="">
//                             <p>${value.ram}</p>
//                          </div>
//                          <div class="col-6 d-flex">
//                              <img src="assets/icon/computer-monitor-svgrepo-com1.png"
//                                  alt="">
//                              <p>${value.motion}</p>
//                          </div>
//                          </ul>
//                      </div>
//                  </div>
//              </div>
//              </div>`;
//         });
//         element += '</div>'
//         if (category === "flavour") {
//             let elemRen = document.querySelector("#flavour .rend")
//             // console.log(elemRen);

//             // elemRen.innerHTML = element
//         } else if (category === "vdu") {
//             let elemRen = document.querySelector("#vdu .rend")
//             // elemRen.innerHTML = element
//         } else {
//             let elemRen = document.querySelector("#vnf .rend")
//             // elemRen.innerHTML = element
//         }

//     } else {
//         element += `
//         <div class="col-12">
//             <p>Dữ liệu trống !!!</p>
//          </div>`;
//         element += '</div>'

//         let elemRen1 = document.querySelector("#vdu .rend")
//         // elemRen1.innerHTML = element

//     }

// }
// this.render(this.paginateFilterData.data)
// this.render(this.paginateFilterData1.data)
// this.render(this.paginateFilterData2.data)


  constructor() { }

  ngOnInit(): void {


    // for (let i = 0; i < this.amountOfModels; i++) {
    // const randomCate = Math.floor(Math.random() * this.nameCate.length);
    // const randomFn = Math.floor(Math.random() * this.fNamePrd.length);
    // const randomLn = Math.floor(Math.random() * this.lNamePrd.length);

    //   let card = {
    //                   name: this.lNamePrd[randomLn] + this.fNamePrd[randomFn],
    //                   chip: "1 vCPU x86" ,
    //                   memory: "1TB HDD",
    //                   ram: "1 vCPU x86",
    //                   motion: 4,
    //                   category: this.nameCate[randomCate]
    //   }
    //               this.items.push(card)
    // }
    // console.log(this.items);

  }
  // onChangePage(pageOfItems: Array<any>) {
  //   // update current page of items
  //   this.pageOfItems = pageOfItems;

  // }
}
