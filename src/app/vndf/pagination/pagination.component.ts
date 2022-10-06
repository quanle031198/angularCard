import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit,OnChanges {
  @Input() numPage = 0  ;
  @Output() numPageEvent = new EventEmitter<any>();


  numChanged: number | any;

  bntStyle: string | undefined;
  constructor() { }

  counter(numbers: number) {
    return new Array(numbers);
  }
  ngOnInit(): void {

  }
  ngOnChanges(): void {
    this.numChanged = this.numPage

  }

  selectedIndex: number = 1;

  handleNum(num: number) {
    this.selectedIndex = num;
    this.numPageEvent.emit(num);
  }

}
