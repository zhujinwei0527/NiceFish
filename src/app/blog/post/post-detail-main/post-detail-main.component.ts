import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flyIn } from '../../../shared/animations/fly-in';
import { SignInService } from '../../user/sign-in/sign-in.service';
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
  public postId: string;
  public currentUser: any;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public signInService: SignInService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log("post-detail>"+params);
      this.postId = params.postId;
    });

    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.subscription = this.signInService.currentUser
      .subscribe(
        (data) => {
          this.currentUser = data;
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