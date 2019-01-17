import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { MessageService } from 'primeng/api';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { flyIn } from '../../../shared/animations/fly-in';

@Component({
  selector: 'write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss'],
  animations: [flyIn]
})

export class WritePostComponent implements OnInit {
  public post: any = {
    title: '',
    content: ''
  };
  public Editor = ClassicEditor;
  private isEdit: boolean = false;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public postService: PostService,
    private messageService: MessageService) {
  }

  ngOnInit() {
    console.log(this.router.url);
    if (this.router.url.indexOf("edit") != -1) {
      this.isEdit = true;
    } else {
      this.isEdit = false;
    }
    this.activeRoute.params.subscribe(
      params => this.getPostDetail(params["postId"])
    );
  }

  public getPostDetail(id: string) {
    this.postService
      .getPostDetail(id)
      .subscribe(
        (data) => {
          this.post = data;
        },
        error => console.error(error)
      );
  }

  doEditPost() {
    let currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
    this.post.userId = currentUser.id;
    this.postService.editPost(this.post).subscribe(
      (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success Message',
          detail: '编辑成功',
          sticky: true,
          life: 1000
        });
        this.router.navigateByUrl("/home");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  doWritePost() {
    let currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
    this.post.userId = currentUser.id;
    this.postService.writePost(this.post).subscribe(
      (res) => {
        this.router.navigateByUrl("/home");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  doCommit() {
    if (this.isEdit) {
      this.doEditPost();
    } else {
      this.doWritePost();
    }
  }
}
