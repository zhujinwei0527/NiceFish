import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { RoleTableService } from "../role-table.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { fadeIn } from "../../../shared/animations/fade-in";

@Component({
  selector: "role-edit",
  templateUrl: "./role-edit.component.html",
  styleUrls: ["./role-edit.component.scss"],
  animations: [fadeIn]
})
export class RoleEditComponent implements OnInit {
  private static ROLE_DETAIL_URL="/auth/role/detail2/";
  private static UPDATE_ROLE_URL="/auth/role/edit2/";
  private static CREATE_ROLE_URL="/auth/role/create2/";
  private static GET_ALL_PERMISSIONS_BY_ROLE_ID_URL="/auth/role/get-all-permissions/";
  private static GET_ALL_PERMISSIONS_URL="/auth/permission/all";

  @Input() panelTitle="编辑角色";
  @Input() btnLabel="保存";
  @Input() isEdit=true;
  @Output() saveSuccess=new EventEmitter();

  private roleId;//编辑角色的时候用到
  public role: any = {};
  public error: Error;
  public allPermissions: any[] = [];
  public selectedList: any[] = [];

  constructor(
    public router: Router,
    public activatedRoute:ActivatedRoute,
    private messageService: MessageService,
    public roleTableService: RoleTableService
    ) { }

  ngOnInit() {
    if(this.isEdit) {
      this.activatedRoute.params.subscribe(params => {
        this.roleId = params.roleId;
        this.getRoleDetails();
      });
    }
  }

  public getRoleDetails() {
    this.roleTableService.getRoleDetails(RoleEditComponent.ROLE_DETAIL_URL,this.roleId)
      .subscribe(
        data=> {
          console.log(data);
          this.role=data;
        },
        error=> {
          console.log(error);
        }
      );
    this.roleTableService.getAllPermissionsByRoleId(RoleEditComponent.GET_ALL_PERMISSIONS_BY_ROLE_ID_URL,this.roleId)
      .subscribe(
        data=> {
          console.log(data);
          this.selectedList=data;
        },
        error=> {
          console.log(error);
        }
      );
    this.roleTableService.getAllPermissions(
      RoleEditComponent.GET_ALL_PERMISSIONS_URL,
      {
        roleId:this.roleId
      })
      .subscribe(
        data=> {
          console.log(data);
          this.allPermissions=data;
        },
        error=> {
          console.log(error);
        }
      );
  }

  public cancel(): void {
    window.history.back();
  }

  public save():void {
    if(this.isEdit) {
      this.role.permissionEntities=this.selectedList;
      this.roleTableService.updateRole(RoleEditComponent.UPDATE_ROLE_URL,this.role)
        .subscribe(
          data=> {
            console.log(data);
            this.allPermissions=data;
          },
          error=> {
            console.log(error);
          }
        );
    } else {
      this.roleTableService.newRole(
        RoleEditComponent.CREATE_ROLE_URL
        ,this.role
      )
      .subscribe(
        data=> {
          if(data&&data.success) {
            this.messageService.add({ severity: "success", summary: "保存成功", detail: "保存成功" });
            this.saveSuccess.emit("saveSuccess");
          } else {
            this.messageService.add({ severity: "error", summary: "保存失败", detail: "保存失败" });
          }
        },
        error=> {
          this.messageService.add({ severity: "error", summary: "保存失败", detail: "保存失败" });
        }
      );
    }
  }
}
