import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "new-permission",
  templateUrl: "./new-permission.component.html",
  styleUrls: ["./new-permission.component.scss"]
})
export class NewPermissionComponent implements OnInit {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  public onSaveSuccess() {
    this.router.navigateByUrl("/manage/permission-table/page/1");
  }
}
