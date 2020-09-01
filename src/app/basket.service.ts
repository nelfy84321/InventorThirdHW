import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  // Create a stream
  stream$ = new Subject();
  items = [];
  totalCost: Number;

  watchStorage() {
    return this.stream$.asObservable();
  }

// Add an item if it is not in the basket
  addToCart(item: any) {
    this.items = JSON.parse(localStorage.getItem('basket')) || [];
    if (!this.items.some(i => i.id == item.id)) {
      this.items.push(item);
      localStorage.setItem('basket', JSON.stringify(this.items));  
    } 
    this.stream$.next('changed');
  }

  removeFromBasket(item: any) {
    this.items = JSON.parse(localStorage.getItem('basket'));
    this.items = this.items.filter(i => item.id != i.id);
    localStorage.setItem('basket', JSON.stringify(this.items));
    this.stream$.next('changed');
  }

// Show all added item in basket 
  getItems() {
    return JSON.parse(localStorage.getItem('basket'));
  }

// Function for "Clear the basket" button
  clearBasket() {
    localStorage.clear();
    this.items = [];
    this.stream$.next('changed');
  }

//Count totals cost of items in basket
  getTotalCost() {
    this.items = JSON.parse(localStorage.getItem('basket'));
    if (this.items != null) {
      return this.items.reduce((prev, current) => prev + current.price, 0)
    }
  }

  constructor() { }
}
