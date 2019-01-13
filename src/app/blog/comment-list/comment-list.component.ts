import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInService } from '../user/sign-in/sign-in.service';
import { SignUpService } from '../user/sign-up/sign-up.service';
import { CommentService } from './comment.service';
import { merge } from 'rxjs'

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  public currentUser: any;
  public postId: string;
  public comment: any = {};

  public comments: Array<any>;
  public rows: number = 5;
  public totalElements: number = 0;
  public currentPage: number = 1;
  public offset: number = 0;
  public end: number = 0;

  constructor(
    public commentService: CommentService,
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

    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    merge(this.signInService.currentUser, this.signUpService.currentUser)
      .subscribe(
        (data) => {
          this.currentUser = data;
        },
        error => console.error(error)
      );
  }

  public getCommentList() {
    this.offset = (this.currentPage - 1) * this.rows;
    this.end = (this.currentPage) * this.rows;
    this.commentService.getCommentList(this.postId, this.currentPage)
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
    this.comment.userId = this.currentUser.id;
    this.comment.postId = this.postId;
    this.commentService.writeComment(this.comment).subscribe(
      (res) => {
        this.currentPage = 1;
        this.getCommentList();
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
}