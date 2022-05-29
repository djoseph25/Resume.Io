import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SwiperSliderComponent } from './swiper-slider/swiper-slider.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SwiperSliderComponent],
  imports: [MaterialModule],
  exports: [NavbarComponent, FooterComponent, SwiperSliderComponent],
  providers: [],
})
export class LandingPageModule {}
