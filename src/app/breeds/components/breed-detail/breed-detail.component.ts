import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { BreedsService } from '../../services/breeds.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breed-detail',
  standalone: true,
  imports: [ CommonModule, RouterLink],
  templateUrl: './breed-detail.component.html',
  styleUrl: './breed-detail.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BreedDetailComponent implements OnInit {
  slideIndex = 1;
  breeds: any;
  breedId: any;
  constructor(
    private route: ActivatedRoute,
    private breedsService: BreedsService
  ) {}

  ngOnInit(): void {
   this.route.paramMap.pipe(
      switchMap((params) => {
        this.breedId = params.get('id');
        return this.breedsService.getBreedImagesById(this.breedId)
      })
    ).subscribe((breeds: any) => {
      this.breeds = breeds;
    })

  }


}
