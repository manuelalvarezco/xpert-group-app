import { Component, Input } from '@angular/core';
import { BreedComponent } from '../breed/breed.component';

@Component({
  selector: 'app-breed-lists',
  standalone: true,
  imports: [BreedComponent],
  templateUrl: './breed-lists.component.html',
  styleUrl: './breed-lists.component.scss'
})
export class BreedListsComponent {
  @Input() detail = false;
  @Input() title = '';
  @Input() breeds: any[] = [];
}
