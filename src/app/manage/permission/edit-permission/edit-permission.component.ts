import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { PermissionMngService } from "../permission-mng.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { fadeIn } from "../../../shared/animations/fade-in";

/**
 * 新建和编辑都使用这个组件完成。
 * @author 大漠穷秋
 */
@Component({
  selector: "edit-permission",
  templateUrl: "./edit-permission.component.html",
  styleUrls: ["./edit-permission.component.scss"],
  animations: [fadeIn]
})
export class EditPermissionComponent implements OnInit {
  private static PERMISSION_DETAIL_URL="/auth/permission/detail/";
  private static UPDATE_PERMISSION_URL="/auth/permission/edit2/";
  private static CREATE_PERMISSION_URL="/auth/permission/create2/";

  @Input() panelTitle="编辑权限";
  @Input() btnLabel="保存";
  @Input() isEdit = true;
  @Output() saveSuccess=new EventEmitter();

  public permission: any = {};
  public error: Error;
  private permissionId;

  constructor(
    public router: Router,
    public activatedRoute:ActivatedRoute,
    private messageService: MessageService,
    public permissionService: PermissionMngService
    ) { }

  ngOnInit() {
    if(this.isEdit) {
      this.activatedRoute.params.subscribe(params => {
        this.permissionId = params.permissionId;
        this.getPermissionDetails();
      });
    }
  }

  public getPermissionDetails() {
    this.permissionService.getPermissionDetails(
        EditPermissionComponent.PERMISSION_DETAIL_URL,
        this.permissionId)
        .subscribe(
          data=> {
            this.permission=data;
          },
          error=> {
            console.log(error);
          }
        );
  }

  public save():void {
    console.log(this.isEdit);
    if(this.isEdit) {
      this.permissionService.updatePermission(
        EditPermissionComponent.UPDATE_PERMISSION_URL,
        this.permission
      )
      .subscribe(
        data=> {
          if(data&&data.success) {
            this.permission=data;
            this.messageService.add({ severity: "success", summary: "修改成功", detail: "修改成功" });
            this.saveSuccess.emit("saveSuccess");
          } else {
            this.messageService.add({ severity: "error", summary: "保存失败", detail: data.msg||"保存失败" });
          }
        },
        error=> {
          console.log(error);
          this.messageService.add({ severity: "error", summary: "保存失败", detail: error||"保存失败" });
        }
      );
    } else {
      this.permissionService.newPermission(
        EditPermissionComponent.CREATE_PERMISSION_URL,
        this.permission
      )
      .subscribe(
        data=> {
          if(data&&data.success) {
            this.messageService.add({ severity: "success", summary: "保存成功", detail: "保存成功" });
            this.saveSuccess.emit("saveSuccess");
          } else {
            this.messageService.add({ severity: "error", summary: "保存失败", detail: data.msg||"保存失败" });
          }
        },
        error=> {
          this.messageService.add({ severity: "error", summary: "保存失败", detail: error||"保存失败" });
        }
      );
    }
  }

  public cancel(): void {
    window.history.back();
  }
}
