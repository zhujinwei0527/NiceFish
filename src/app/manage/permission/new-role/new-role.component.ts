import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "new-role",
  templateUrl: "./new-role.component.html",
  styleUrls: ["./new-role.component.scss"]
})
export class NewRoleComponent implements OnInit {
  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  public onSaveSuccess() {
    this.router.navigateByUrl("/manage/role-table/page/1");
  }

}
