import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

export interface ICart {
  'id': number;
  'image': string;
  'description': string;
  'price': number;
  'quantity': number;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: Array<ICart> = [];
  nameParams = '';
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    const savedCarts = JSON.parse(localStorage.getItem('carts'));
    if (savedCarts && savedCarts.length > 0) {
      this.carts = savedCarts;
    } else {
      this.carts = await this.loadCartsFromFile();
    }

  }

  async loadCartsFromFile() {
    const carts = await this.http.get('assets/inventory/json').toPromise();
    return carts.json;
  }

  addBikeModel1() {
    const newBikeModel1: ICart = {
      'id': null,
      'image': null,
      'description': null,
      'price': null,
      'quantity': null
    };
    this.carts.unshift(newBikeModel1);
    saveToLocalStorage(‘carts’, this.carts);
  }
  addBikeModel2() {
    const newBikeModel2: ICart = {
      'id': null,
      'image': null,
      'description': null,
      'price': null,
      'quantity': null
    };
    this.carts.unshift(newBikeModel2);
    saveToLocalStorage(‘carts’, this.carts);
  }
  addBikeModel3() {
    const newBikeModel3: ICart = {
      'id': null,
      'image': null,
      'description': null,
      'price': null,
      'quantity': null
    };
    this.carts.unshift(newBikeModel3);
    saveToLocalStorage(‘carts’, this.carts);
  }
  saveToLocalStorage(key: string, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  deleteCart(index: number) {
    this.carts.splice(index, 1);
    this.saveToLocalStorage('carts', this.carts);
  }
  save(key: string, data: Array<ICart>) {
    this.saveToLocalStorage(key, data);
    this.toastService.showToast('success', 2000, 'Success: Items Saved!');
  }
  checkout() {
    if (this.nameParams == null || this.nameParams === '') {
      this.toastService.showToast('warning', 2000, 'Name must not be null!');
    } else if (this.nameParams.indexOf(', ') === -1) {
      this.toastService.showToast('warning', 2000, 'Name must contain a comma and a space!');
    }
    else {
      let price = 0;
      let quantity = 0;
      let total = 0;
      
      
    }
  }
}

