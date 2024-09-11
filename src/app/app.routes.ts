import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { BreedDetailComponent } from './breeds/components/breed-detail/breed-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BreedsTableComponent } from './breeds/components/breeds-table/breeds-table.component';
import { UserLoginComponent } from './dashboard/user-login/user-login.component';
import { authGuard } from './auth/guards/auth.guard';
import { FavoritesComponent } from './breeds/pages/favorites/favorites.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home App Cats',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'breeds/:id', component: BreedDetailComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'breeds-table', component: BreedsTableComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'admin', canActivate: [ authGuard ], component: UserLoginComponent },
    ]
  },
];
