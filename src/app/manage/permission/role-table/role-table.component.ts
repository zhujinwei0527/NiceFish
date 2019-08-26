import { Component, OnInit } from "@angular/core";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "role-table",
  templateUrl: "./role-table.component.html",
  styleUrls: ["./role-table.component.scss"],
  animations: [
    fadeIn
  ]
})
export class RoleTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
