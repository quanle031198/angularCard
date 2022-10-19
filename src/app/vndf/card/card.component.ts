import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Card } from "src/app/interface/Card";




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit,OnChanges {
  @Input() cardDetail:Card | any;

  newCardDetail : Card | any;
  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(arrChange:any): void {
  // console.log(arrChange.cardDetail.currentValue);


  }
}
