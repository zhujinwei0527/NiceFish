import { Component, OnInit, Input } from '@angular/core';
import { flyIn } from '../../shared/animations/fly-in';
import { ActivatedRoute, Router} from '@angular/router';
import { PostTableService } from './services/post-table-mng.service';

@Component({
  selector: 'post-table-mng',
  templateUrl: './post-table-mng.component.html',
  styleUrls: ['./post-table-mng.component.scss'],
  animations: [
    flyIn
  ]
})
export class PostTableComponent implements OnInit {
  public cols: any = [
    { field: 'title', header: '标题' },
    { field: 'postTime', header: '发布时间' },
    { field: 'userName', header: '作者' },
    { field: 'readTimes', header: '阅读数' },
    { field: 'commentTimes', header: '评论数' },
    { field: 'likedTimes', header: '点赞数' }
  ];
  public postList: Array<any> = [
    {
      "postId": 1,
      "title": "这是文章的标题",
      "postTime": "2018-05-17 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555"
    },
    {
      "postId": 2,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555"
    },
    {
      "postId": 3,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555"
    },
    {
      "postId": 4,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555"
    },
    {
      "postId": 5,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555"
    },
    {
      "postId": 6,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555"
    },
    {
      "postId": 7,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555"
    },
    {
      "postId": 8,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555"
    },
    {
      "postId": 9,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555"
    },
    {
      "postId": 10,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555"
    },
    {
      "postId": 11,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555"
    }
  ];

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public postTableService: PostTableService
  ) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getPostsByPage(params["page"])
    );
  }

  public getPostsByPage(page: Number) {

  }

  public pageChanged(event: any): void {
    let page = parseInt(event.page) + 1;
    this.router.navigateByUrl(`/manage/posttable/page/${page}`);
  }

  public goToWrite(): void {
    this.router.navigateByUrl("post/write");
  }

  public editPost(event): void {
    var target = event.currentTarget;
    var nameAttr = target.attributes.name;
    var value = nameAttr.nodeValue;
    console.log("postId>" + value);
  }

  public top(event): void {
    var target = event.currentTarget;
    var nameAttr = target.attributes.name;
    var value = nameAttr.nodeValue;
    console.log("postId>" + value);
  }

  public unTop(event): void {
    var target = event.currentTarget;
    var nameAttr = target.attributes.name;
    var value = nameAttr.nodeValue;
    console.log("postId>" + value);
  }

  public delPost(event): void {
    var target = event.currentTarget;
    var nameAttr = target.attributes.name;
    var value = nameAttr.nodeValue;
    console.log("postId>" + value);
  }
}
