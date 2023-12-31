import { Injectable, inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//ToDo refactor to remove deprecated CanActivate
@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  constructor(
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.user$.pipe(
      map(user => {
        if (user) {
          return true;
        } else {
          this.router.navigate([`/login`], { queryParams: { redirectUrl: state.url } });
          return false;
        }
      })
    );
  }
}
