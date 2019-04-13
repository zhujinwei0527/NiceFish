import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostTableService } from './post-table.service';
import { ConfirmationService } from 'primeng/api';
import { fadeIn } from '../../shared/animations/fade-in';

@Component({
  selector: 'post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss'],
  animations: [
    fadeIn
  ]
})
export class PostTableComponent implements OnInit {
  public loading: boolean = true;
  public currentPage: number = 1;
  public totalRecords: number = 11;
  public cols: any = [
    { field: 'title', header: '标题' },
    { field: 'time', header: '发布时间' },
    { field: 'userName', header: '作者' },
    { field: 'readTimes', header: '阅读数' },
    { field: 'commentTimes', header: '评论数' },
    { field: 'likedTimes', header: '点赞数' }
  ];
  public postList: Array<any> = [];

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public postTableService: PostTableService,
    private confirmationService: ConfirmationService
  ) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params) => {
        this.currentPage = parseInt(params["page"]);
        this.getPostByUserIdAndPaging();
      }
    );
  }

  public getPostByUserIdAndPaging() {
    this.loading = true;
    let userId = JSON.parse(window.localStorage.getItem("currentUser")).id;
    this.postTableService.getPostByUserIdAndPaging(this.currentPage, userId).subscribe(
      (res) => {
        this.postList = res.content;
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
    this.router.navigateByUrl(`/manage/post-table/page/${this.currentPage}`);
  }

  public editPost(id): void {
    this.router.navigateByUrl(`/post/edit-post/${id}`);
  }

  public delPost(id): void {
    this.confirmationService.confirm({
      message: '确定要删除吗？',
      accept: () => {
        this.postTableService.delPost(id).subscribe(
          (data) => {
            this.getPostByUserIdAndPaging();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  public goToWrite(): void {
    this.router.navigateByUrl("post/write");
  }
}
