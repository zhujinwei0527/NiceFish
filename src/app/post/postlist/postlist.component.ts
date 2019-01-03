import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PostlistService } from './services/postlist.service';

@Component({
	selector: 'postlist',
	templateUrl: './postlist.component.html',
	styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
	public rows: number = 5;
	public totalElements: number = 0;
	public currentPage: number = 0;
	public offset: number = 0;
	public end: number = 0;

	public postList: Array<any>;

	constructor(
		public router: Router,
		public activeRoute: ActivatedRoute,
		public postService: PostlistService) {
	}

	ngOnInit() {
		this.activeRoute.params.subscribe(params => {
			console.log(params);
			this.currentPage = params.page;
			this.loadData();
		});
	}

	public loadData() {
		this.offset = (this.currentPage - 1) * this.rows;
		this.end = (this.currentPage) * this.rows;
		this.postService.getPostList(this.currentPage).subscribe(
			(res) => {
				console.log(res);
				this.postList = res.content;
				this.totalElements = res.totalElements;
			},
			error => {
				console.log(error);
			}
		);
	}

	public pageChanged(event: any): void {
		let temp = parseInt(event.page) + 1;
		this.router.navigateByUrl("posts/page/" + temp);
	}
}
