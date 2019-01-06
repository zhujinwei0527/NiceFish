import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../shared/shared.module';

import { CalendarModule } from 'primeng/components/calendar/calendar';
import { CommentTableComponent } from '../manage/comment-table-mng/comment-table-mng.component';
import { PostTableComponent } from '../manage/post-table-mng/post-table-mng.component';

import { ManageMainComponent } from './manage-main/manage-main.component';
import { UserTableComponent } from './user-table-mng/user-table-mng.component';
import { SysParamComponent } from './sys-param-mng/sys-param-mng.component';

import { PostTableService } from './post-table-mng/post-table-mng.service';
import { CommentTableService } from './comment-table-mng/comment-table-mng.service';
import { AuthGuard } from '../shared/auth-guard';

import { manageRoutes } from './manage.routes';

@NgModule({
  declarations: [
    CommentTableComponent,
    PostTableComponent,
    ManageMainComponent,
    UserTableComponent,
    SysParamComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PaginatorModule,
    TableModule,
    CalendarModule,
    RouterModule.forChild(manageRoutes)
  ],
  exports: [
    ManageMainComponent
  ],
  providers: [
    PostTableService,
    CommentTableService,
    AuthGuard
  ]
})
export class ManageModule { }