import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PostService } from "../post.service";

@Component({
	selector: "postlist",
	templateUrl: "./post-list.component.html",
	styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
	//每页的条数，这里需要跟后端做对应，TODO:改到系统配置中
	public rows = 10;
	public totalElements = 0;
	public currentPage = 0;
	public offset = 0;
	public end = 0;

	public postList: Array<any>;

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public postService: PostService) {
	}

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
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
		let url = `/posts/page/${temp}`;
		console.log(url);
		this.router.navigateByUrl(url);
	}
}
