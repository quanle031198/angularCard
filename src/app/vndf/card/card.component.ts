import { Component, ViewEncapsulation, ViewChild, OnInit, Input } from "@angular/core";
import { DisplayPrdService } from "src/app/display-prd.service";
import { Products } from "src/app/products";
import { SwiperComponent } from "swiper/angular";




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardDetail:any;
  itemCards:any
  constructor() { }
  ngOnInit(): void {
     this.itemCards = this.cardDetail
  }

  ngAfterViewInit(): void {
  }
}
