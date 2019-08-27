import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from "@angular/router";
import { PostTableService } from "./post-table.service";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "post-table",
  templateUrl: "./post-table.component.html",
  styleUrls: ["./post-table.component.scss"],
  animations: [
    fadeIn
  ]
})
export class PostTableComponent implements OnInit {
  @Input() postListURL = "/blog/post/manage/post-table/";
  @Input() editURL="";
  @Input() delURL="";

  public postList: Array<any>;
  public totalRecords=0;

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
    return this.postTableService.getPostTable(this.postListURL+page).subscribe(
      data => {
        console.log(data);
        this.postList=data.content;
        this.totalRecords=data.totalElements;
      },
      error => { console.log(error) }
    );
  }

  public pageChanged(event: any): void {
    let currentPage=(event.first/event.rows)+1;
    this.router.navigateByUrl("/manage/post-table/page/" + currentPage);
  }

  public goToWrite(): void {
    this.router.navigateByUrl("user/write");
  }

  public editPost(event): void {
    let target = event.currentTarget;
    let nameAttr = target.attributes.name;
    let value = nameAttr.nodeValue;
    console.log("postId>" + value);
  }

  public top(event): void {
    let target = event.currentTarget;
    let nameAttr = target.attributes.name;
    let value = nameAttr.nodeValue;
    console.log("postId>" + value);
  }

  public unTop(event): void {
    let target = event.currentTarget;
    let nameAttr = target.attributes.name;
    let value = nameAttr.nodeValue;
    console.log("postId>" + value);
  }

  public delPost(rowData,ri): void {
    let postId=rowData.postId;
    console.log(postId);
  }
}
