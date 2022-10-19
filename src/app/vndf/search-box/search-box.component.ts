import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  // @Input() listCardSearch:any;
  // @Output() dataSearchEvents = new EventEmitter<any>()

  nameProduct:string = '';
  constructor() { }

  ngOnInit(): void {

  }
  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange(){
    this.searchTextChange.emit(this.nameProduct);
  }

}
