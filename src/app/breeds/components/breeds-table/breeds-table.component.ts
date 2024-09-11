import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';

@Component({
  selector: 'app-breeds-table',
  standalone: true,
  imports: [],
  templateUrl: './breeds-table.component.html',
  styleUrl: './breeds-table.component.scss',
})
export class BreedsTableComponent implements OnInit {
  breeds: any = [];
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
