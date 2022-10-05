import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() numPage:any  ;

  @Output() numPageEvent = new EventEmitter<any>();
  clickNum : any
  numbers:any
  status: boolean = false;
  constructor() { }

  counter(numbers: number) {
    return new Array(numbers);
  }
  ngOnInit(): void {
    this.numbers = this.numPage
  }
  handleNum(num: number) {
    this.numPageEvent.emit(num);
  }

}
