import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PostDetailService } from './services/post-detail.service';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  public post: any = {};

  constructor(public postDetailService: PostDetailService,
    public activeRoute: ActivatedRoute
  ) {
    console.log(this.postDetailService);
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getPostDetail(params["postId"])
    );
  }

  public getPostDetail(id: string) {
    this.postDetailService
      .getPostDetail(id)
      .subscribe(
        (data) => {
          this.post = data;
        },
        error => console.error(error)
      );
  }
}
