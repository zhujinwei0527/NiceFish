import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PostService } from '../post.service';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss'],
  animations: [flyIn]
})

export class WritePostComponent implements OnInit, AfterViewInit, OnDestroy {
  public post: any = {};

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public postService: PostService) {
  }

  ngOnInit() {

  }

  public fileInputChangeHandler(): void {
    let fileInput = <HTMLInputElement>document.getElementById('img_input');
    let inputValue = fileInput.value;
    if (!inputValue) {
      return;
    }
    //提交隐藏的表单，上传文件
    let fileForm = <HTMLFormElement>document.getElementById('file_upload_form');
    fileForm.action = "fileuploadurl";
    fileForm.onsubmit = function (event) {
      console.log(event);
      event.preventDefault();
      let file = fileInput.files[0];
      let formData = new FormData();
      formData.append('file', file, file.name);

      let xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'file_upload_URL.php');
      xhr.onload = function () {
        let json;
        if (xhr.status != 200) {
          console.log('HTTP Error: ' + xhr.status);
          return;
        }
        json = JSON.parse(xhr.responseText);
        if (!json || typeof json.location != 'string') {
          console.log('Invalid JSON: ' + xhr.responseText);
          return;
        }
        console.log(json.location);
        fileInput.value = '';
      };
      xhr.send(formData);
    }
    fileForm.submit();
    fileInput.value = '';
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  doWritePost() {
    let currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
    this.post.userId = currentUser.id;
    this.postService.writePost(this.post).subscribe(
      (res) => {
        alert("发布成功");
        this.router.navigateByUrl("/home");
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
