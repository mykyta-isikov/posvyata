import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {

  constructor(private route: Router) {
  }

  canActivate() {
    if (this.getUserType() === 'admin') {

      return true;
    } else {
      this.route.navigate(['/auth/login/admin']);
      return false;
    }
  }

  canActivateChild() {
    return this.canActivate();
  }

  getUserType(): string {
    const _storageContent = localStorage.getItem('authorization');
    if (_storageContent === null) return '';
    const _token = _storageContent.split(' ')[1];
    const _decodedToken = atob(_token.split('.')[1]);
    return JSON.parse(_decodedToken).type;
  }

}
