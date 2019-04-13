import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentTableService } from './comment-table.service';
import { ConfirmationService } from 'primeng/api';
import { fadeIn } from '../../shared/animations/fade-in';

@Component({
  selector: 'comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.scss'],
  animations: [
    fadeIn
  ]
})
export class CommentTableComponent implements OnInit {
  public loading: boolean = true;
  public currentPage: number = 1;
  public totalRecords: number = 11;
  public commentList: Array<any> = [];

  constructor(public router: Router,
    public activeRoute: ActivatedRoute,
    public commentTableService: CommentTableService,
    private confirmationService: ConfirmationService) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params) => {
        this.currentPage = parseInt(params["page"]);
        this.getCommentByUserIdAndPaging();
      }
    );
  }

  public getCommentByUserIdAndPaging(): void {
    this.loading = true;
    let userId = JSON.parse(window.localStorage.getItem("currentUser")).id;
    this.commentTableService.getCommentByUserIdAndPaging(this.currentPage, userId).subscribe(
      (res) => {
        this.commentList = res.content;
        this.totalRecords = res.totalElements;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public onPage(event: any): void {
    this.currentPage = parseInt((event.first / event.rows) + "") + 1;
    this.router.navigateByUrl(`/manage/comment-table/page/${this.currentPage}`);
  }

  public delComment(commentId: Number): void {
    this.confirmationService.confirm({
      message: '确定要删除吗？',
      accept: () => {
        this.commentTableService.delComment(commentId).subscribe(
          (data) => {
            this.getCommentByUserIdAndPaging();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }
}
