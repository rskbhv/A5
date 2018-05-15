import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { BannerComponent } from './leftbody/banner/banner.component';
import { EnquiryformComponent } from './rightbody/enquiryform/enquiryform.component';
import { HomeComponent } from './routes/home/home.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';
import { OffersComponent } from './routes/offers/offers.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    BannerComponent,
    EnquiryformComponent,
    HomeComponent,
    NewcoursesComponent,
    OffersComponent,
    OfficesComponent,
    VirtualclassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
