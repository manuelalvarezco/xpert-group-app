import { CommonModule, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { BreedsService } from '../../breeds/services/breeds.service';
import { BreedComponent } from '../../breeds/components/breed/breed.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { BreedListsComponent } from '../../breeds/components/breed-lists/breed-lists.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    BreedListsComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  breeds: any[] = [];
  title = 'Top búsquedas';
  constructor(private breedsService: BreedsService) {}

  ngOnInit(): void {
    this.getBreeds();
  }

  getBreeds() {
    const params = {
      limit: 10
    }
    this.breedsService.getBreeds(params).subscribe((breeds: any) => {
      this.breeds = breeds;
    });
  }
}
