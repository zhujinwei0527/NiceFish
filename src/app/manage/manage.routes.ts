import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table-mng/post-table-mng.component';
import { CommentTableComponent } from './comment-table-mng/comment-table-mng.component';
import { UserTableComponent } from './user-table-mng/user-table-mng.component';
import { UserProfileComponent } from '../blog/user/user-profile/user-profile.component';
import { SysParamComponent } from './sys-param-mng/sys-param-mng.component';
import { ChartComponent } from './chart/chart.component';
import { AuthGuard } from '../shared/auth-guard';

export const manageRoutes = [
	{
		path: '',
		component: ManageMainComponent,
		canActivate: [AuthGuard],
		children: [
			{ path: '', redirectTo: 'chart', pathMatch: 'full' },
			{ path: 'chart', component: ChartComponent },
			{ path: 'post-table/page/:page', component: PostTableComponent },
			{ path: 'comment-table/page/:page', component: CommentTableComponent },
			{ path: 'user-table/page/:page', component: UserTableComponent },
			{ path: 'user-table/edituser/:userId', component: UserProfileComponent },
			{ path: 'user-table/newuser', component: UserProfileComponent },
			{ path: 'sysparam', component: SysParamComponent },
			{ path: 'profile', component: UserProfileComponent },
			{ path: '**', redirectTo: 'post-table/page/1' }
		]
	}
];