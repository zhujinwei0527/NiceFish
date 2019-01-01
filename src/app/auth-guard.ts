import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SignInService } from './user/sign-in/sign-in.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		public signInService: SignInService) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (localStorage.getItem("currentUser")) {
			return true;
		}
		this.router.navigateByUrl("signin");
		return false;
	}
}
