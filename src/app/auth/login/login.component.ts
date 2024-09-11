import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule, RouterLink ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form: FormGroup = new FormGroup('');

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
    this.buildForm();
  }

  login(event: Event){
    event.preventDefault();
    this.authService.login(this.form.value).subscribe(
      (resp: any) => {
        this.authService.grantedAccess();
        setTimeout(() => {
          this.router.navigateByUrl('/home');
        }, 2000);
      },(error: any) => {
        this.authService.accessDenied('Login');
      }
    )
  }

  private buildForm(){
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    })
  }

}
