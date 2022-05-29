import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [MaterialModule],
  exports: [NavbarComponent, FooterComponent],
  providers: [],
})
export class LandingPageModule {}
