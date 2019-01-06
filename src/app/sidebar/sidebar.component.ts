import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

private  medias: Array<Media>;

  constructor() { }

  ngOnInit() {
    this.medias = [
      new Media(1, 'https://via.placeholder.com/64', 'angular常用操作1', 'admin', ),
      new Media(2, 'https://via.placeholder.com/64', 'angular常用操作2', 'admin', ),
      new Media(3, 'https://via.placeholder.com/64', 'angular常用操作3', 'admin', ),
      new Media(4, 'https://via.placeholder.com/64', 'angular常用操作4', 'admin', ),
      new Media(5, 'https://via.placeholder.com/64', 'angular常用操作5', 'admin', ),
      new Media(6, 'https://via.placeholder.com/64', 'angular常用操作6', 'admin', ),
      new Media(7, 'https://via.placeholder.com/64', 'angular常用操作7', 'admin', ),
     ];
}

}
export class Media {
  constructor(
     public id: number,
     public img: String,
      public heading: String,      // 文章标题
      public body: String,   // 文章内容

  ) {
​
}
}
