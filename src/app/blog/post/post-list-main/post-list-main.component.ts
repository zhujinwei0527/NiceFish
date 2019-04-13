import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../../shared/animations/fade-in';

@Component({
  selector: 'post-list-main',
  templateUrl: './post-list-main.component.html',
  styleUrls: ['./post-list-main.component.scss'],
  animations: [
    fadeIn
  ]
})
export class PostListMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
