import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from "@angular/router";
import { UserTableService } from "./user-table.service";
import { MessageService } from "primeng/api";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.scss"],
  animations: [
    fadeIn
  ]
})
export class UserTableComponent implements OnInit {
  @Input() userListURL = "/auth/user/list2/";
  @Input() delURL="/auth/user/delete2/";

  public userList: Array<any>;
  public totalRecords=0;
  public currentPage=1;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public userTableService: UserTableService,
    public messageService:MessageService
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        this.currentPage=params["page"];
        this.getUserListByPage();
      }
    );
  }

  public getUserListByPage() {
    return this.userTableService.getUserTable(this.userListURL+this.currentPage).subscribe(
      data => {
        this.userList=data.content;
        this.totalRecords=data.totalElements;
      },
    );
  }

  public pageChanged(event: any): void {
    this.currentPage=(event.first/event.rows)+1;
    this.router.navigateByUrl("/manage/user-table/page/" + this.currentPage);
  }

  public delUser(rowData,ri): void {
    let userId=rowData.userId;
    this.userTableService.del(this.delURL+userId)
    .subscribe(data=> {
      if(data&&data.success) {
        this.messageService.add({
          severity: "success",
          summary: "Success Message",
          detail: "删除成功",
          sticky: false,
          life: 1000
        });
        this.getUserListByPage();
      } else {
        this.messageService.add({
          severity: "error",
          summary: "Fail Message",
          detail: data.msg||"删除失败",
          sticky: false,
          life: 1000
        });
      }
    },error=> {
      this.messageService.add({
        severity: "error",
        summary: "Fail Message",
        detail: error||"删除失败",
        sticky: false,
        life: 1000
      });
    });
  }

  public newUser(): void {
    this.router.navigateByUrl("manage/usertable/newuser");
  }

  public blockUser(userId: Number): void {
    console.log(userId);
  }

  public unBlockUser(userId: Number): void {
    console.log(userId);
  }

  public resetPwd(userId: Number): void {
    console.log(userId);
  }
}
