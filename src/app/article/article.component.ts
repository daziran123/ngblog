import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
// step2.声明文章对象数组
private articles: Array<Article>;
​
  constructor() { }
// 初始化复制
  ngOnInit() {
    this.articles = [
      new Article(1, 'angular常用操作1', 'admin', '本节介绍angular常用操作...', 3000, 50),
      new Article(2, 'angular常用操作2', 'admin', '本节介绍angular常用操作...', 600, 10),
      new Article(3, 'angular常用操作3', 'admin', '本节介绍angular常用操作...', 20, 5),
     ];
}

}
// 第一步 构造类
export class Article {
  constructor(
      public id: number,      // 文章Id
      public title: String,   // 文章标题
      public author: String,  // 文章作者
      public zy: String,      // 文章摘要
      public yd: number,      // 阅读数
      public pl: number       // 评论数
  ) {
​
}
}
