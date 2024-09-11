import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  private URL_API = "http://localhost:3000/api/v1";
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
