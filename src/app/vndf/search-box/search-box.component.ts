import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() listCardSearch:any;
  @Output() dataSearchEvents = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {

  }

  searchEvents(txtSearch:any){

    let searchInput =  txtSearch.target.value.trim().toUpperCase();
    let newArrSearch = this.listCardSearch.filter((s:any) => {
        if (s.name.toUpperCase().includes(searchInput)) {
            return s;
        }
    })
    this.dataSearchEvents.emit(newArrSearch)



  }


}
