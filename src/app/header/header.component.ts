import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// Icons from "Fontawesom" were import
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faShopingBasket = faShoppingBasket;
  faSearch = faSearch;
  // Create "toggle" for basket icon
  displayToggle = false;
  
  constructor( ) {  }

  ngOnInit(): void {
  }

}
