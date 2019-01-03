import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { flyIn } from '../../animations/fly-in';
import { SignInService } from '../../user/sign-in/sign-in.service';
import { UserInfoComponent } from '../../user/user-info/user-info.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'post-detail-main',
  templateUrl: './post-detail-main.component.html',
  styleUrls: ['./post-detail-main.component.scss'],
  animations: [
    flyIn
  ]
})
export class PostDetailMainComponent implements OnInit {
  private subscription: Subscription;
  public hasLogin: boolean = false;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public signInService: SignInService) {

  }

  ngOnInit() {
    if (window.localStorage.getItem("currentUser")) {
      this.hasLogin = true;
    }

    this.subscription = this.signInService.currentUser
      .subscribe(
        data => {
          let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
          let routerState: RouterState = this.router.routerState;
          let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

          console.log(activatedRouteSnapshot);
          console.log(routerState);
          console.log(routerStateSnapshot);

          //如果是从/signin这个URL进行的登录，什么都不做
          if (routerStateSnapshot.url.indexOf("/signin") == -1) {
            alert("用户登录成功，可以隐藏登录面板了！");
          }
        },
        error => {
          console.error(error);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  doFollow() {
    alert("父组件监听子组件的事件...");
  }
}