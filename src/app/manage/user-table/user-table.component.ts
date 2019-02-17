import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserTableService } from './user-table.service';
import { flyIn } from '../../shared/animations/fly-in';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class UserTableComponent implements OnInit {
  public loading: boolean = true;
  public currentPage: number = 1;
  public totalRecords: number = 11;
  public userList: Array<any> = [];

  constructor(public router: Router,
    public activeRoute: ActivatedRoute,
    public userTableService: UserTableService) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params) => {
        this.currentPage = parseInt(params["page"]);
        this.getUserListByPaging();
      }
    );
  }

  public getUserListByPaging(): void {
    this.loading = true;
    this.userTableService.getUserListByPaging(this.currentPage).subscribe(
      (res) => {
        this.userList = res.content;
        this.totalRecords = res.totalElements;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public onPage(event: any): void {
    this.currentPage = parseInt((event.first / event.rows) + "") + 1;
    this.router.navigateByUrl(`/user/user-table/page/${this.currentPage}`);
  }
}
