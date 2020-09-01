import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  items = JSON.parse(localStorage.getItem('basket')) || [];
  totalCost;

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit() {
    this.basketService.watchStorage().subscribe((data:string) => {
      this.items = this.basketService.getItems();
      this.totalCost = this.basketService.getTotalCost();
    })
}


  removeFromBasket(item) {
    this.basketService.removeFromBasket(item)
  }

  clearBasket() {
  this.basketService.clearBasket();  
  }
}
