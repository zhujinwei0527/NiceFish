import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

import { PickListModule } from "primeng/picklist";
import { TableModule } from "primeng/table";

import { SignUpComponent } from "../blog/user/sign-up/sign-up.component";
import { SignUpService } from "../blog/user/sign-up/sign-up.service";
import { SignInComponent } from "../blog/user/sign-in/sign-in.component";
import { UserInfoComponent } from "../blog/user/user-info/user-info.component";
import { UserProfileComponent } from "../blog/user/user-profile/user-profile.component";
import { FormControlComponent } from "../blog/user/user-profile/dynamic-form/form-control.component";
import { TrimStringPipe } from "./pipes/trim-string.pipe";
import { SanitizeHtmlPipe } from "./pipes/sanitize-html-pipe";

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    PickListModule,
    TableModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignUpComponent,
    SignInComponent,
    UserInfoComponent,
    UserProfileComponent,
    FormControlComponent,
    TrimStringPipe,
    SanitizeHtmlPipe
  ],
  exports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    PickListModule,
    TableModule,
    SignInComponent,
    SignUpComponent,
    UserInfoComponent,
    UserProfileComponent,
    TrimStringPipe,
    SanitizeHtmlPipe
  ],
  providers:[
    SignUpService
  ]
})

export class SharedModule {

}
