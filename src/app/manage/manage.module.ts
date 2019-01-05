import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { PaginatorModule } from 'primeng/paginator';
import { SharedModule } from '../shared/shared.module';
import { PostSharedModule } from '../shared/post.module';
import { ManageMainComponent } from './manage-main/manage-main.component';
import { UserTableComponent } from './user-table-mng/user-table-mng.component';
import { SysParamComponent } from './sys-param-mng/sys-param-mng.component';

import { PostTableService } from './post-table-mng/services/post-table-mng.service';
import { AuthGuard } from '../auth-guard';

import { manageRoutes } from './manage.routes';

@NgModule({
  declarations: [
    ManageMainComponent,
    UserTableComponent,
    SysParamComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostSharedModule,
    PaginatorModule,
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