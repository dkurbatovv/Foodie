import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registrationForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    
    if (this.registrationForm.valid) {
      const username = this.registrationForm.value.login;
      const password = this.registrationForm.value.password;
      
      this.authService.register(this.registrationForm.value.email, this.registrationForm.value.password).subscribe(
        (response) => {
          console.log('Регистрация прошла успешно', response);
          
        },
        (error) => {
          console.error('Ошибка регистрации', error);
        }
      );
    }
  }

}
