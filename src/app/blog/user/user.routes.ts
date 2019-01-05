import { RouterModule } from "@angular/router";
import { UserMainComponent } from './user-main/user-main.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostTableComponent } from '../../manage/post-table-mng/post-table-mng.component';
import { CommentTableComponent } from '../../manage/comment-table-mng/comment-table-mng.component';

export const userRoutes = [
	{
		path: '',
		component: UserMainComponent,
		children: [
			{ path: '', redirectTo: 'posttable/page/1', pathMatch: 'full' },
			{ path: 'posttable/page/:page', component: PostTableComponent },
			{ path: 'commenttable/page/:page', component: CommentTableComponent },
			{ path: 'profile', component: UserProfileComponent },
			{ path: '**', redirectTo: 'write' }
		]
	}
];