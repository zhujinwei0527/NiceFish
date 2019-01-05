import { NgModule } from '@angular/core';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { CalendarModule } from 'primeng/components/calendar/calendar';

import { SharedModule } from './shared.module';

import { CommentTableComponent } from '../manage/comment-table-mng/comment-table-mng.component';
import { PostTableComponent } from '../manage/post-table-mng/post-table-mng.component';

@NgModule({
  imports: [
    SharedModule,
    DataTableModule,
    CalendarModule
  ],
  declarations: [
    CommentTableComponent,
    PostTableComponent
  ],
  exports: [
    CommentTableComponent,
    PostTableComponent
  ]
})

export class PostSharedModule {

}