import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() breeds: any[] = [];
  breed = new FormControl('', []);
  breedSelected: any;

  constructor() {
    this.breed.valueChanges.subscribe((breed) => {
      this.breedSelected = breed;
    });
  }

}
