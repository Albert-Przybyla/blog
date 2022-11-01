import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';
import { ModalComponent } from './modal/modal.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { CommentsComponent } from './comments/comments.component';
import { AddComponent } from './comments/add/add.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SearchComponent, MainComponent, ArticleComponent, ModalComponent, AdminComponent, LoginComponent, RegisterComponent, CommentsComponent, AddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
