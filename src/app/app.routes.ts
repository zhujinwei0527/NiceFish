import { SignInComponent } from './user/sign-in/sign-in.component';
import { RetrievePwdComponent } from './user/retrieve-pwd/retrieve-pwd.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ChartComponent } from './chart/chart.component';
import { AuthGuard } from './auth-guard';
import { WritePostComponent } from './post/write-post/write-post.component';

export const appRoutes = [
	{
		path: '',
		redirectTo: 'posts',
		pathMatch: 'full'
	},
	{
		path: "echart",
		component: ChartComponent
	},
	{
		path: 'home',
		loadChildren: './home/home.module#HomeModule'
	},
	{
		path: 'posts',
		loadChildren: './home/home.module#HomeModule'
	},
	{
		path: 'post',
		loadChildren: './post/post.module#PostModule'
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
		path: 'user',
		loadChildren: './user/user.module#UserModule'
	},
	{
		path: 'manage',
		loadChildren: './manage/manage.module#ManageModule'
	},
	{
		path: '**',//fallback router must in the last
		loadChildren: './home/home.module#HomeModule'
	}
];
