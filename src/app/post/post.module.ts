import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostService } from './post.service';
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';
import { AddCommentComponent } from '../comment/comment-list/comment-list.component';
import { CommentService } from '../comment/services/comment.service';
import { BooleanPipe } from '../utils/boolean-pipe';
import { AuthGuard } from '../auth-guard';

import { postRoutes } from './post.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        PaginatorModule,
        FormsModule,
        RouterModule.forChild(postRoutes)
    ],
    exports: [BooleanPipe],
    declarations: [
        PostlistComponent,
        PostDetailMainComponent,
        PostDetailComponent,
        AddCommentComponent,
        BooleanPipe
    ],
    providers: [
        CommentService,
        PostService,
        AuthGuard
    ]
})
export class PostModule { }
