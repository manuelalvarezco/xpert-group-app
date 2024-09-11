import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../breeds/services/store.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  breedsCount = 0;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.getShoppingCart();
  }

  openMenu(){
    this.isOpen = !this.isOpen;
  }

  getShoppingCart(){
    this.storeService.myFavorites$.subscribe( breeds => {
      this.breedsCount = breeds.length;
    })
  }
}

