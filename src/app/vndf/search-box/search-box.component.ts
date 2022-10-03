import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  fullname :any;
  constructor() { }

  ngOnInit(): void {
  }
  Search(){
    if(this.fullname == ""){
      console.log("k");

    }else {
      
    }
  }
}
