import { Component, OnInit } from '@angular/core';
import { ShowHideStyleBuilder } from '@angular/flex-layout';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation, SwiperOptions } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


@Component({
  selector: 'app-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrls: ['./swiper-slider.component.css']
})
export class SwiperSliderComponent implements OnInit {
  config: SwiperOptions = {
    autoplay: true,
    slidesPerView: 4,
    navigation: false,
    freeMode: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    effect: 'fade',

  };

  constructor() { }


  ngOnInit() {
  }

  onSwiper(Swiper: any) {
    console.log(Swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
