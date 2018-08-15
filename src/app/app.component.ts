import {Component, OnInit} from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import * as FA from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  imgUrl = '';
  showImg = false;
  savedImg = '';
  file = '';
  titleOn = true;
  Fa = FA;
  title = '';
  text = '';
  fileList = [
  ];
  previewImage = '';
  postArray = [];

  constructor(private msg: NzMessageService) {}
  ngOnInit() {
  }
  onClick(event) {
    console.log(event);
    if (event.path[0].className === 'ant-upload-list-item-info') {
      this.file = event.path[0].children[0].children[0].children[0].src;
    }
  }
  titleOnF() {
    this.titleOn = true;
  }
  titleOffF() {
    this.titleOn = false;
  }
  addImage() {
    if (this.file !== '') {
      this.savedImg = this.file;
      this.postArray.push(this.savedImg);
      this.file = '';
    }
  }
  addImgUrl() {
    if (this.imgUrl !== '') {
      this.savedImg = this.imgUrl;
      this.postArray.push(this.savedImg);
      this.imgUrl = '';
      this.showImg = false;
    }
  }
  back() {
    this.file = '';
  }
  showImgF() {
    this.showImg = true;
  }
  // onEvent(event) {
  //   if (this.imgUrl) {
  //     document.getElementById('hover').style.left = event.offsetX + 'px';
  //   }
  // }
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
  }
}
