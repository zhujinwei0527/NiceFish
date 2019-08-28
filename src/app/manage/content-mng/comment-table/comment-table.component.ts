import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { CommentTableService } from "./comment-table.service";
import { fadeIn } from "../../../shared/animations/fade-in";

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
  @Input() delURL="/blog/comment/manage/delete/";

  public commentList: Array<any> = [];
  public totalRecords=0;
  public currentPage=1;

  constructor(public router: Router,
    public activeRoute: ActivatedRoute,
    private messageService: MessageService,
    private commentTableService:CommentTableService) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        this.currentPage=params["page"];
        this.getCommentsByPage()
      }
    );
  }

  public getCommentsByPage() {
    this.commentTableService
    .getCommentTable(this.commentListURL+this.currentPage)
    .subscribe(
      data => {
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
    .subscribe(
      data=> {
        console.log(data);
        if(data&&data.success) {
          this.getCommentsByPage();
        } else {
          this.messageService.add({ severity: "error", summary: "删除失败", detail: data.msg||"删除失败" });
        }
      },error=> {
        console.log(error);
      });
  }
}
