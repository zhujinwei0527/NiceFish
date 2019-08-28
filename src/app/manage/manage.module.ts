import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PaginatorModule } from "primeng/paginator";
import { SharedModule } from "../shared/shared.module";
import { PostSharedModule } from "../shared/post.module";

import { ManageMainComponent } from "./manage-main/manage-main.component";
import { UserTableComponent } from "./permission/user-table/user-table.component";
import { RoleTableComponent } from "./permission/role-table/role-table.component";
import { RoleEditComponent } from "./permission/role-edit/role-edit.component";
import { PermissionTableComponent } from "./permission/permission-table/permission-table.component";
import { PermissionEditComponent } from "./permission/permission-edit/permission-edit.component";
import { SysParamComponent } from "./sys-param/sys-param.component";
import { UserEditComponent } from "./permission/user-edit/user-edit.component";
import { NewRoleComponent } from "./permission/new-role/new-role.component";
import { NewPermissionComponent } from "./permission/new-permission/new-permission.component";
import { ChartComponent } from "./chart/chart.component";

import { CommentTableService } from "./content-mng/comment-table/comment-table.service";
import { NgxEchartsModule } from "ngx-echarts";
import { PostTableService } from "./content-mng/post-table/post-table.service";
import { UserTableService } from "./permission/user-table.service";
import { RoleTableService } from "./permission/role-table.service";
import { PermissionTableService } from "./permission/permission-table.service";
import { ManageRoutingModule } from "./manage.routing.module";

@NgModule({
  declarations: [
    ManageMainComponent,
    UserTableComponent,
    SysParamComponent,
    UserEditComponent,
    NewRoleComponent,
    NewPermissionComponent,
    ChartComponent,
    RoleTableComponent,
    PermissionTableComponent,
    RoleEditComponent,
    PermissionEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostSharedModule,
    PaginatorModule,
    NgxEchartsModule,
    ManageRoutingModule
  ],
  exports: [
    ManageMainComponent
  ],
  providers: [
    PostTableService,
    CommentTableService,
    UserTableService,
    RoleTableService,
    PermissionTableService
  ]
})
export class ManageModule { }
