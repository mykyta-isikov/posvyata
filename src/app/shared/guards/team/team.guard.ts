import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamGuard implements CanActivate {

  constructor(private route: Router) {
  }

  canActivate() {
    if (this.getUserType() === 'team') {

      return true;
    } else {
      this.route.navigate(['/code']);
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
