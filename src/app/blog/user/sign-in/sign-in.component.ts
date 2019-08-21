import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from "@angular/router";
import { SignInService } from "./sign-in.service";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
  animations: [fadeIn]
})
export class SignInComponent implements OnInit {
  private URL_CONST = "http://localhost:80/nicefish/auth/captcha/captchaImage?type=math";
  public capchaURL = "http://localhost:80/nicefish/auth/captcha/captchaImage?type=math";
  public user: any = {};
  public captcha: any = "";
  public error: Error;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public signInService: SignInService
  ) {
    console.log(this.signInService);
  }

  ngOnInit() {
    console.log("--- sign-in-component ---");
    console.log(this.router);
    console.log(this.activatedRoute);

    let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    let routerState: RouterState = this.router.routerState;
    let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

    console.log(activatedRouteSnapshot);
    console.log(routerState);
    console.log(routerStateSnapshot);
  }

  public doLogin(): void {
    console.log(this.user);
    this.signInService.login();
  }

  public doLogout(): void {
    this.signInService.logout();
    this.router.navigateByUrl("home");
  }

  public retrievePwd(): void {
    this.router.navigateByUrl("retrievepwd");
  }

  public refreshCaptcha(): void {
    this.capchaURL = `${this.URL_CONST}&kill_cache=${new Date().getTime()}`;
  }
}
