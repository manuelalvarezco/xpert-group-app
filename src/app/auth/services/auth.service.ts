import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  login(data: any){
    return this.http.post(`${this.apiUrl}/auth/login`,{email: data.email, password: data.password} );
  }


  register(user: any){
    return this.http.post<any>(`${this.apiUrl}/auth/register`, user);
  }

  grantedAccess(){
    Swal.fire({
      title: 'Felicitaciones!',
      text: 'Acceso condedido!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  accessDenied(module: string){
    Swal.fire({
      title: 'Error!',
      text: `Usuario/Contraseña incorrecta`,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }
}
