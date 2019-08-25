import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SignInService } from "../user/sign-in/sign-in.service";
import { SignUpService } from "../user/sign-up/sign-up.service";
import { CommentListService } from "./comment-list.service";
import {ApiEndpoints} from "../../ApiEndpoints";
import { merge } from "rxjs"

@Component({
  selector: "comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.scss"]
})
export class CommentListComponent implements OnInit {
  public capchaURL = `${ApiEndpoints.API_ENDPOINT}/auth/captcha/captchaImage?type=math`;
  // public currentUser: any;
  public postId: string;
  public comment: any = {};

  public comments: Array<any>;
  public rows = 10;
  public totalElements = 0;
  public currentPage = 1;
  public offset = 0;
  public end = 0;

  constructor(
    public commentListService: CommentListService,
    public signInService: SignInService,
    public signUpService: SignUpService,
    public router: Router,
    public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.postId = params.postId;
      this.getCommentList();
    });
  }

  public getCommentList() {
    this.offset = (this.currentPage - 1) * this.rows;
    this.end = (this.currentPage) * this.rows;
    this.commentListService.getCommentList(this.postId, this.currentPage)
      .subscribe(
        (res) => {
          console.log(res);
          this.comments = res.content;
          this.totalElements = res.totalElements;
        },
        error => console.error(error)
      );
  }

  public doWriteComment() {
    this.comment.postId = this.postId;
    this.commentListService.writeComment(this.comment).subscribe(
      (res) => {
        this.comment= {};
        this.currentPage = 1;
        this.getCommentList();
        this.refreshCaptcha();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public pageChanged(event: any): void {
    this.currentPage = parseInt(event.page) + 1;
    this.getCommentList();
  }

  public refreshCaptcha(): void {
    this.capchaURL = `${this.capchaURL}&kill_cache=${new Date().getTime()}`;
  }
}
