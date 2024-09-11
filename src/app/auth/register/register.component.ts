import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [  ReactiveFormsModule, FormsModule, RouterLink ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form: FormGroup = new FormGroup('');

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
    this.buildForm();
  }

  register(event: Event){
    event.preventDefault();
    this.authService.register(this.form.value).subscribe(
      (resp: any) => {
        this.authService.grantedAccess();
      },(error: any) => {
        this.authService.accessDenied('Register');
      }
    )
  }

  private buildForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
}
