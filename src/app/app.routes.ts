import { SignInComponent } from './blog/user/sign-in/sign-in.component';
import { RetrievePwdComponent } from './blog/user/retrieve-pwd/retrieve-pwd.component';
import { SignUpComponent } from './blog/user/sign-up/sign-up.component';
import { AuthGuard } from './shared/auth-guard';
import { WritePostComponent } from './blog/post/write-post/write-post.component';

export const appRoutes = [
	{
		path: '',
		redirectTo: 'posts',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: './blog/home/home.module#HomeModule'
	},
	{
		path: 'posts',
		loadChildren: './blog/home/home.module#HomeModule'
	},
	{
		path: 'post',
		loadChildren: './blog/post/post.module#PostModule'
	},
	{
		path: 'post/write',
		canActivate: [AuthGuard],
		component: WritePostComponent
	},
	{
		path: 'signin',
		component: SignInComponent
	},
	{
		path: 'retrievepwd',
		component: RetrievePwdComponent
	},
	{
		path: 'signup',
		component: SignUpComponent
	},
	{
		path: 'manage',
		loadChildren: './manage/manage.module#ManageModule'
	},
	{
		path: '**',//fallback router must in the last
		loadChildren: './blog/home/home.module#HomeModule'
	}
];
