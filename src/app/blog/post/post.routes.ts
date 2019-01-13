import { PostlistComponent } from './post-list/post-list.component';
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';

export const postRoutes = [
	{
		path: '',
		redirectTo: 'post-list/page/1',
		pathMatch: 'full'
	},
	{
		path: 'post-list/page/:page',
		component: PostlistComponent
	},
	{
		path: 'post-detail/:postId',
		component: PostDetailMainComponent
	},
	{
		path: 'write-post',
		loadChildren: "./write-post/write-post.module#WritePostModule"
	}
];