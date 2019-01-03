import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input()
  public hasLogin: boolean = false;

  public comments: Array<any>;
  public rows: number = 5;
  public totalElements: number = 0;
  public currentPage: number = 1;
  public offset: number = 0;
  public end: number = 0;

  public postId: string;

  constructor(
    public commentService: CommentService,
    public router: Router,
    public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        this.postId = params["postId"];
        this.getCommentList();
      });
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

  public pageChanged(event: any): void {
    this.currentPage = parseInt(event.page) + 1;
    this.getCommentList();
  }
}
