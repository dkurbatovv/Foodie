import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = this.authService.isAuthenticated;
    const userRole = this.authService.userRole;
    console.log(isAuthenticated);
    console.log(userRole);

    if (isAuthenticated && userRole === 'user') {
      return true; 
    } else {
      this.router.navigate(['/no-access']); 
      return false; 
    }
  }
}
