import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasketService } from '../basket.service';

//Exportin interface for interpolation in post.html
export interface Item {
  id: number
  name: string
  description: string
  price: number
  image: string
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  items: Item[] = [];


  constructor(
    private http: HttpClient,
    private basketService: BasketService
    ) { }

  ngOnInit() {
    this.http.get<Item[]>('https://my-json-server.typicode.com/nelfy84321/fakesarver/posts').subscribe(items => {
      console.log('response', items)
      this.items = items
    })
  }

  addToCart(item) {
    this.basketService.addToCart(item);
  }

}
