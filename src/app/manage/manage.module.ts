import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { SharedModule } from '../shared/shared.module';
import { CommentTableComponent } from '../manage/comment-table/comment-table.component';
import { PostTableComponent } from '../manage/post-table/post-table.component';

import { ManageMainComponent } from './manage-main/manage-main.component';
import { UserTableComponent } from './user-table/user-table.component';
import { SysParamComponent } from './sys-param/sys-param.component';
import { ChartComponent } from './chart/chart.component';
import { EChartOptionDirective1 } from './chart/echart-option.directive';
import { RoleTableComponent } from './role-table/role-table.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { PermissionTableComponent } from './permission-table/permission-table.component';
import { PermissionEditComponent } from './permission-edit/permission-edit.component';

import { PostTableService } from './post-table/post-table.service';
import { CommentTableService } from './comment-table/comment-table.service';
import { UserTableService } from './user-table/user-table.service';
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
    ChartComponent,
    RoleTableComponent,
    RoleEditComponent,
    PermissionTableComponent,
    PermissionEditComponent
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