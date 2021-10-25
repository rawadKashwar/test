import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import {DbcoursesService} from './dbcourses.service';
import { SummaryPipe } from './summary.pipe';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputFormatDirective } from './input-format.directive';
import { CustomFormsModule } from 'ng2-validation'
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    SummaryPipe,
    InputFormatDirective,
    PostComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [DbcoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
