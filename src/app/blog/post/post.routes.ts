import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';
import { PostListMainComponent } from './post-list-main/post-list-main.component';

export const postRoutes = [
	{
		path: '',
		redirectTo: 'post-list/page/1',
		pathMatch: 'full'
	},
	{
		path: 'post-list/page/:page',
		component: PostListMainComponent
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