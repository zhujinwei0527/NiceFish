import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { SharedModule } from '../shared/shared.module';
import { CommentTableComponent } from '../manage/comment-table-mng/comment-table-mng.component';
import { PostTableComponent } from '../manage/post-table-mng/post-table-mng.component';

import { ManageMainComponent } from './manage-main/manage-main.component';
import { UserTableComponent } from './user-table-mng/user-table-mng.component';
import { SysParamComponent } from './sys-param-mng/sys-param-mng.component';
import { ChartComponent } from './chart/chart.component';
import { EChartOptionDirective1 } from './chart/echart-option.directive';

import { PostTableService } from './post-table-mng/post-table-mng.service';
import { CommentTableService } from './comment-table-mng/comment-table-mng.service';
import { UserTableService } from './user-table-mng/user-table-mng.service';
import { AuthGuard } from '../shared/auth-guard';

import { manageRoutes } from './manage.routes';

@NgModule({
  declarations: [
    CommentTableComponent,
    PostTableComponent,
    ManageMainComponent,
    UserTableComponent,
    SysParamComponent,
    EChartOptionDirective1,
    ChartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PaginatorModule,
    TableModule,
    CalendarModule,
    ConfirmDialogModule,
    RouterModule.forChild(manageRoutes)
  ],
  exports: [
    ManageMainComponent
  ],
  providers: [
    PostTableService,
    CommentTableService,
    UserTableService,
    ConfirmationService,
    AuthGuard
  ]
})
export class ManageModule { }