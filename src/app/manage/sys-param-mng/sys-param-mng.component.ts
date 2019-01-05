import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../shared/animations/fly-in';

@Component({
  selector: 'sys-param-mng',
  templateUrl: './sys-param-mng.component.html',
  styleUrls: ['./sys-param-mng.component.scss'],
  animations: [
    flyIn
  ]
})
export class SysParamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
