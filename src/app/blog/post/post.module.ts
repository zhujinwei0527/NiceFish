import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostlistComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { CommentService } from '../comment-list/comment.service';
import { BooleanPipe } from '../../shared/boolean-pipe';
import { AuthGuard } from '../../shared/auth-guard';

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
        CommentListComponent,
        BooleanPipe
    ],
    providers: [
        CommentService,
        PostService,
        AuthGuard
    ]
})
export class PostModule { }
