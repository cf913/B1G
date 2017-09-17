import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
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
  }

}
