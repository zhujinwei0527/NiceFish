import { SignInComponent } from './blog/user/sign-in/sign-in.component';
import { RetrievePwdComponent } from './blog/user/retrieve-pwd/retrieve-pwd.component';
import { SignUpComponent } from './blog/user/sign-up/sign-up.component';

export const appRoutes = [
	{
		path: '',
		redirectTo: 'post',
		pathMatch: 'full'
	},
	{
		path: 'post',
		loadChildren: './blog/post/post.module#PostModule'
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
		redirectTo: 'post',
		pathMatch: 'full'
	}
];
