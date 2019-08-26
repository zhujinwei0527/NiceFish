import { Component, OnInit } from "@angular/core";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "permission-table",
  templateUrl: "./permission-table.component.html",
  styleUrls: ["./permission-table.component.scss"],
  animations: [
    fadeIn
  ]
})
export class PermissionTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
