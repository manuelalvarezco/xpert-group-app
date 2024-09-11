import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { StoreService } from '../../breeds/services/store.service';
import { SnackbarComponent } from '../../shared/snackbar/snackbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ HeaderComponent, RouterOutlet, SnackbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(private storeService: StoreService){}

  ngOnInit(): void {
    this.storeService.myFavorites$.subscribe(
      breeds => {
        this.showSnackbar();
      }
    )
  }
  isAdded = false;

  quitSnackbar(){
    this.isAdded = false;
  }

  showSnackbar(){
    this.isAdded = this.storeService.showSnack();
  }

}
