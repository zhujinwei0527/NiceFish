import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService, TranslateStore } from '@ngx-translate/core';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { SignInService } from './blog/user/sign-in/sign-in.service';
import { RetrievePwdComponent } from './blog/user/retrieve-pwd/retrieve-pwd.component';
import { SignUpComponent } from './blog/user/sign-up/sign-up.component';
import { SignUpService } from './blog/user/sign-up/sign-up.service';
import { RetrievePwdService } from './blog/user/retrieve-pwd/retrieve-pwd.service';

import { EqualValidator } from './blog/user/sign-up/directives/equal-validator.directive';

import { ChartComponent } from './blog/chart/chart.component';
import { EChartOptionDirective1 } from './blog/chart/echart-option.directive';
import { WritePostComponent } from './blog/post/write-post/write-post.component';
import { PostService } from './blog/post/post.service';
import { AuthInterceptor } from './shared/auth-interceptor';
import { AuthGuard } from './shared/auth-guard';
import { appRoutes } from './app.routes';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RetrievePwdComponent,
    SignUpComponent,
    EqualValidator,
    EChartOptionDirective1,
    ChartComponent,
    WritePostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    JsonpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule,
    ToastModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TranslateService,
    TranslateStore,
    SignInService,
    SignUpService,
    RetrievePwdService,
    MessageService,
    PostService
    ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
