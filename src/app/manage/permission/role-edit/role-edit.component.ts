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
  @Input() panelTitle="创建角色";
  @Input() btnLabel="保存";
  @Input() isEdit=true;
  @Output() saveSuccess=new EventEmitter();

  private getRoleDetailURL="/auth/role/detail2/";
  private updateRoleURL="/auth/role/edit2/";
  private getAllPermissionsByRoleIdURL="/auth/role/get-all-permissions/";
  private getAllPermissions="/auth/permission/all";
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
      });
      this.getRoleDetails();
    }
  }

  public getRoleDetails() {
    this.roleTableService.getRoleDetails(this.getRoleDetailURL,this.roleId)
      .subscribe(
        data=> {
          console.log(data);
          this.role=data;
        },
        error=> {
          console.log(error);
        }
      );
    this.roleTableService.getAllPermissionsByRoleId(this.getAllPermissionsByRoleIdURL,this.roleId)
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
      this.getAllPermissions,
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
      this.roleTableService.updateRole(this.updateRoleURL,this.role)
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
      this.roleTableService.newRole("/auth/role/create2",this.role)
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
