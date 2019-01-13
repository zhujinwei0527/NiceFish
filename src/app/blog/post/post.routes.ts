import { PostlistComponent } from './postlist/postlist.component';

export const postRoutes = [
	{
		path: '',
		redirectTo: 'page/1',
		pathMatch: 'full'
	},
	{
		path: 'page/:page',
		component: PostlistComponent
	},
	{
		path: 'post-detail/:postId',
		loadChildren: "./write-post/write-post.module#WritePostModule"
	}
];