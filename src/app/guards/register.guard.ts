import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class RegisterGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
      this.router.navigate(['/home/login']);
      return false;
  }
}
