import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

private img1: Img;
private img2: Img;
private img3: Img;

  constructor() { }
  ngOnInit() {
    this.img1 = new Img('../../assets/1.jpg', '图片一');
    this.img2 = new Img('../../assets/2.jpg', '图片二');
    this.img3 = new Img('../../assets/3.jpg', '图片三');
  }
}

  export  class Img {
    constructor(
        public imgSrc: String,
        public imgAlt: String
    ) {
​    }
}

