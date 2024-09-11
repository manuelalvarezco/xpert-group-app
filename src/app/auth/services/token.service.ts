import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveUser(user: string){
    localStorage.setItem('user', user);
  }

  getUser(){
    const user: any = localStorage.getItem('user');
    return JSON.parse(user);
  }

  saveToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(){
    const token = localStorage.getItem('token');
    return token;
  }

  isAuth(): boolean {
    const token = this.getToken();
    return token?.length ? true : false;
  }
}
