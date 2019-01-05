import { Component, OnInit, Input } from '@angular/core';
import { flyIn } from '../../shared/animations/fly-in';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';
import { PostTableService } from './services/post-table.service';
import { DataTableModule } from 'primeng/primeng';

@Component({
  selector: 'post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class PostTableComponent implements OnInit {
  public postList: Array<any> = [
    {
      "postId": 1,
      "title": "这是文章的标题",
      "postTime": "2018-05-17 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555",
      "isfamous": "true"
    },
    {
      "postId": 2,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555",
      "isfamous": "false"
    },
    {
      "postId": 3,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555",
      "isfamous": "false"
    },
    {
      "postId": 4,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555",
      "isfamous": "true"
    },
    {
      "postId": 5,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555",
      "isfamous": "false"
    },
    {
      "postId": 6,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555",
      "isfamous": "false"
    },
    {
      "postId": 7,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555",
      "isfamous": "false"
    },
    {
      "postId": 8,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555",
      "isfamous": "false"
    },
    {
      "postId": 9,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555",
      "isfamous": "false"
    },
    {
      "postId": 10,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555",
      "isfamous": "false"
    },
    {
      "postId": 11,
      "title": "这是文章的标题",
      "postTime": "2018-11-21 10:44",
      "userName": "大漠穷秋",
      "userId": "1",
      "readTimes": "10000",
      "commentTimes": "10000",
      "likedTimes": "5555",
      "isfamous": "false"
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
    let urlTree: UrlTree = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.router.navigateByUrl(s[0] + "/posttable/page/" + event.page);
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

  public onRowSelect(event): void {
    console.log(event.data);
  }

  public onRowUnselect(event): void {
    console.log(event.data);
  }
}
