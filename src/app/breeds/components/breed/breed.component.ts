import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [ RouterLink, CommonModule ],
  templateUrl: './breed.component.html',
  styleUrl: './breed.component.scss'
})
export class BreedComponent {
  @Input() detail = false;
  @Input() breed = {
    breed_id: '',
    url: '',
    name: ''
  };

  constructor(private storeService: StoreService) { }

  addToFavorite(breed: any){
    this.storeService.addProduct(breed);
  }
}
