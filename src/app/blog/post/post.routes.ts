import { PostlistComponent } from './postlist/postlist.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

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
		component: PostDetailComponent
	},
	{
		path: 'write',
		loadChildren: "./write-post/write-post.module#WritePostModule"
	}
];