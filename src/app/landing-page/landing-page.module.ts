import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SwiperSliderComponent } from './swiper-slider/swiper-slider.component';
import { ResumeBodyLandingComponent } from './resume-body-landing/resume-body-landing.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SwiperSliderComponent, ResumeBodyLandingComponent],
  imports: [MaterialModule],
  exports: [NavbarComponent, FooterComponent, SwiperSliderComponent, ResumeBodyLandingComponent],
  providers: [],
})
export class LandingPageModule { }
