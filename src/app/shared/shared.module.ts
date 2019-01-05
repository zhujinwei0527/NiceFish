import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { SignInComponent } from '../blog/user/sign-in/sign-in.component';
import { UserInfoComponent } from '../blog/user/user-info/user-info.component';
import { UserProfileComponent } from '../blog/user/user-profile/user-profile.component';
import { FormControlComponent } from '../blog/user/user-profile/dynamic-form/form-control.component';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignInComponent,
    UserInfoComponent,
    UserProfileComponent,
    FormControlComponent
  ],
  exports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    SignInComponent,
    UserInfoComponent,
    UserProfileComponent
  ]
})

export class SharedModule {

}