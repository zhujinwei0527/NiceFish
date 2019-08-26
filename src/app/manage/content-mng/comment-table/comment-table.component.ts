import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from "@angular/router";
import { fadeIn } from "../../../shared/animations/fade-in";
import { CommentTableService } from "./comment-table.service";

@Component({
  selector: "comment-table",
  templateUrl: "./comment-table.component.html",
  styleUrls: ["./comment-table.component.scss"],
  animations: [
    fadeIn
  ]
})
export class CommentTableComponent implements OnInit {
  @Input() commentListURL = "/blog/comment/manage/comment-table/";
  @Input() editURL="";
  @Input() delURL="";

  public commentList: Array<any> = [];

  constructor(public router: Router,
    public activeRoute: ActivatedRoute,
    private commentTableService:CommentTableService) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getCommentsByPage(params["page"])
    );
  }

  public getCommentsByPage(page: Number) {
    this.commentTableService
    .getCommentTable(this.commentListURL+page)
    .subscribe(
      data => {
        console.log(data);
        this.commentList=data.content;
      },
      error => { console.log(error) }
    );
  }

  public pageChanged(event: any): void {
    let urlTree: UrlTree = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.router.navigateByUrl(s[0] + "/commenttable/page/" + event.page);
  }

  public delComment(commentId: Number): void {
    console.log(commentId);
  }

  public onRowSelect(event): void {

  }

  public onRowUnselect(event): void {

  }
}
