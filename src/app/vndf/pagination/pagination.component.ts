import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() numPage = 0  ;

  @Output() numPageEvent = new EventEmitter<any>();
  clickNum : any
  status: boolean = false;

  bntStyle: string | undefined;
  constructor() { }

  counter(numbers: number) {
    return new Array(numbers);
  }
  ngOnInit(): void {
  }

  selectedIndex: number = 1;

  handleNum(num: number) {
    this.selectedIndex = num;
    this.numPageEvent.emit(num);
  }

}
