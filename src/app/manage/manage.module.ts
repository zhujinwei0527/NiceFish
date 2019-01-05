import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { PaginatorModule } from 'primeng/paginator';
import { DataTableModule } from 'primeng/primeng';
import { SharedModule } from '../shared/shared.module';

import { CalendarModule } from 'primeng/components/calendar/calendar';
import { CommentTableComponent } from '../manage/comment-table-mng/comment-table-mng.component';
import { PostTableComponent } from '../manage/post-table-mng/post-table-mng.component';

import { ManageMainComponent } from './manage-main/manage-main.component';
import { UserTableComponent } from './user-table-mng/user-table-mng.component';
import { SysParamComponent } from './sys-param-mng/sys-param-mng.component';

import { PostTableService } from './post-table-mng/services/post-table-mng.service';
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
    DataTableModule,
    CalendarModule,
    RouterModule.forChild(manageRoutes)
  ],
  exports: [
    ManageMainComponent
  ],
  providers: [
    PostTableService,
    AuthGuard
  ]
})
export class ManageModule { }