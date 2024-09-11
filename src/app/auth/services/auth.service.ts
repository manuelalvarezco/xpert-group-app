import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  login(data: any){
    return this.http.post(`${this.apiUrl}/auth/login`,{email: data.email, password: data.password} );
  }


  register(user: any){
    return this.http.post<any>(`${this.apiUrl}/auth/register`, user);
  }

  grantedAccess(){
    Swal.fire({
      title: 'Congrats!',
      text: 'Your Access is Granted',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  accessDenied(module: string){
    Swal.fire({
      title: 'Error!',
      text: `Error in ${module}`,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }
}
