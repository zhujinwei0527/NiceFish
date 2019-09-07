import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxEchartsModule } from "ngx-echarts";
import { PaginatorModule } from "primeng/paginator";
import { SharedModule } from "../shared/shared.module";
import { PostSharedModule } from "../shared/post.module";

import { ManageMainComponent } from "./manage-main/manage-main.component";
import { UserTableComponent } from "./permission/user-table/user-table.component";
import { RoleTableComponent } from "./permission/role-table/role-table.component";
import { EditRoleComponent } from "./permission/edit-role/edit-role.component";
import { PermissionTableComponent } from "./permission/permission-table/permission-table.component";
import { EditPermissionComponent } from "./permission/edit-permission/edit-permission.component";
import { SysParamComponent } from "./sys-param/sys-param.component";
import { NewUserComponent } from "./permission/new-user/new-user.component";
import { NewRoleComponent } from "./permission/new-role/new-role.component";
import { NewPermissionComponent } from "./permission/new-permission/new-permission.component";
import { ChartComponent } from "./chart/chart.component";

import { PostTableService } from "./content-mng/post-table/post-table.service";
import { CommentTableService } from "./content-mng/comment-table/comment-table.service";
import { UserMngService } from "./permission/user-mng.service";
import { RoleMngService } from "./permission/role-mng.service";
import { PermissionMngService } from "./permission/permission-mng.service";
import { SysParamService } from "./sys-param/sys-param.service";

import { ManageRoutingModule } from "./manage.routing.module";

@NgModule({
  declarations: [
    ManageMainComponent,
    UserTableComponent,
    SysParamComponent,
    NewUserComponent,
    NewRoleComponent,
    NewPermissionComponent,
    ChartComponent,
    RoleTableComponent,
    PermissionTableComponent,
    EditRoleComponent,
    EditPermissionComponent
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
    UserMngService,
    RoleMngService,
    PermissionMngService,
    SysParamService
  ]
})
export class ManageModule { }
