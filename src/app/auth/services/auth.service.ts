import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { environment } from '../../../environments/environment.development';
import { TokenService } from './token.service';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(data: any){
    return this.http.post(`${this.apiUrl}/auth/login`,{email: data.email, password: data.password} )
    .pipe(
      tap((response: any) => {
        this.tokenService.saveToken(response.token)
        this.tokenService.saveUser(JSON.stringify(response.user))
        return response;
      }),
      catchError((error: any) => {
        throw new Error(error)
      })
    )
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return of(true);
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
