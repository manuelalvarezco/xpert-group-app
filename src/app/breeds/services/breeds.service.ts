import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  private URL_API = environment.API_URL;
  constructor(private http: HttpClient) { }


  getBreeds(params?: any) {
    return this.http.get(`${this.URL_API}/breeds`, params);
  }

  getBreedById(id?: string) {
    return this.http.get(`${this.URL_API}/breeds/${id}`);
  }
  getBreedImagesById(id?: string) {
    return this.http.get(`${this.URL_API}/breeds-images/${id}`);
  }
}
