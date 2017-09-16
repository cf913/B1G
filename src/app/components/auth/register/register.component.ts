import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  confirm_password: string;
  message: string;
  error = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.password === this.confirm_password) {
      this.authService.register(this.email, this.password)
        .then(res => {
          console.log('success');
          this.router.navigate(['/main']);
        })
        .catch(err => {
          this.error = true;
          this.message = err.message;
          console.log(err.message);
          this.router.navigate(['/home/register']);
        });
    } else {
      this.error = true;
      this.message = 'Passwords do not match!';
    }
  }

}
