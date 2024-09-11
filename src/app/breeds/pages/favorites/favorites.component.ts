import { Component, OnInit } from '@angular/core';
import { BreedListsComponent } from '../../components/breed-lists/breed-lists.component';
import { StoreService } from '../../services/store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [ BreedListsComponent, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {
  title = 'Tus favoritos';
  breeds = [];
  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.breeds = this.storeService.getStoreBreeds()
  }
}
