import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from "@angular/router";
import { SignInService } from "./sign-in.service";
import { MessageService } from 'primeng/api';

import { User } from "../model/user-model";
import { fadeIn } from "../../animations/fade-in";

@Component({
  selector: "sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
  animations: [fadeIn]
})
export class SignInComponent implements OnInit {
  public user: User = new User();
  public error: Error;

  constructor(public router: Router,
    public activatedRoute: ActivatedRoute,
    public signInService: SignInService,
    private messageService: MessageService) { }

  ngOnInit() {
    let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    let routerState: RouterState = this.router.routerState;
    let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;
  }

  public doSignIn(): void {
    this.signInService.signIn(this.user).subscribe((data: any) => {

    }, (error: any) => {
      this.messageService.add({ severity: 'danger', summary: '登录失败', detail: '用户名或密码不正确' });
    });
  }

  public doLogout(): void {
    this.signInService.logout();
    this.router.navigateByUrl("home");
  }

  public retrievePwd(): void {
    this.router.navigateByUrl("retrievepwd");
  }
}
