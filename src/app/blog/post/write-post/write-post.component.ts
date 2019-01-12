import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PostService } from '../post.service';
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

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public postService: PostService) {
  }

  ngOnInit() {
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
}
