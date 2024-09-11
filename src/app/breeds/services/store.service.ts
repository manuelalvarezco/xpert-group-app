import { Injectable } from '@angular/core';
import { Breed } from '../../shared/models/breed.model';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private showSnackBar = false;
  private breeds = '';
  private shoppingCart: Breed[] = [];
  private myFavorites = new BehaviorSubject<Breed[]>([]);
  myFavorites$ = this.myFavorites.asObservable();

  constructor() {
    const count = this.getStoreBreeds();
   }

  addProduct(breed: Breed){
    this.shoppingCart.push(breed)
    this.setStoreBreeds(this.shoppingCart);
    this.showSnackBar = true;
    this.myFavorites.next(this.shoppingCart);
  }

  removeProduct(id: number){
    this.shoppingCart.splice(id, 1);
    this.setStoreBreeds(this.shoppingCart);
    this.showSnackBar = false;
    this.myFavorites.next(this.shoppingCart);
  }

  getShoppingCart(){
    return this.shoppingCart;
  }

  getTotal(){
    return this.shoppingCart.reduce((sum, item) => sum + 2522, 0);
  }


  setStoreBreeds(products: Breed[]){
    localStorage.setItem('favorites_breeds', JSON.stringify(products));
  }

  getStoreBreeds(){
    this.breeds = localStorage.getItem('favorites_breeds') as string;
    return JSON.parse(this.breeds) ;
  }

  showSnack(){
    return this.showSnackBar;
  }


}
