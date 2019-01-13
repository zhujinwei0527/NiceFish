import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../../shared/animations/fly-in';

@Component({
  selector: 'post-list-main',
  templateUrl: './post-list-main.component.html',
  styleUrls: ['./post-list-main.component.scss'],
  animations: [
    flyIn
  ]
})
export class PostListMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
