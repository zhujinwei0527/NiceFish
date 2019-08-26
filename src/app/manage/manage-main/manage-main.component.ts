import { Component, OnInit } from "@angular/core";
import { fadeIn } from "../../shared/animations/fade-in";

@Component({
  selector: "manage-main",
  templateUrl: "./manage-main.component.html",
  styleUrls: ["./manage-main.component.scss"],
  animations: [
    fadeIn
  ]
})
export class ManageMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
