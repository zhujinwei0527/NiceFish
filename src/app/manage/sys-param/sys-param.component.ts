import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../shared/animations/fade-in';

@Component({
  selector: 'sys-param',
  templateUrl: './sys-param.component.html',
  styleUrls: ['./sys-param.component.scss'],
  animations: [
    fadeIn
  ]
})
export class SysParamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
