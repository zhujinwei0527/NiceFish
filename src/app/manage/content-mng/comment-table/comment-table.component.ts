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
  @Input() delURL="";

  public commentList: Array<any> = [];
  public totalRecords=0;

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
        this.totalRecords=data.totalElements;
      },
      error => { console.log(error) }
    );
  }

  public pageChanged(event: any): void {
    let currentPage=(event.first/event.rows)+1;
    this.router.navigateByUrl("/manage/comment-table/page/"+ currentPage);
  }

  public delComment(rowData,ri): void {
    this.commentTableService.delComment(this.delURL+rowData.id)
    .subscribe(res=> {
      console.log(res);
    },error=> {
      console.log(error);
    });
  }
}
