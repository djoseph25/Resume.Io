import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-resume-body-landing',
  templateUrl: './resume-body-landing.component.html',
  styleUrls: ['./resume-body-landing.component.css']
})
export class ResumeBodyLandingComponent implements OnInit {
  config: SwiperOptions = {
    autoplay: true,
    slidesPerView: 1,
    navigation: false,
    freeMode: true,
    effect: 'creative',

  };

  constructor() { }

  ngOnInit() {
  }

}
