import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { HttpIntercepterBasicAuthHeaderService } from './service/http/http-intercepter-basic-auth-header.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    TodoListComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // add
    AppRoutingModule,
    HttpClientModule // add
  ],

  // Add provider
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : HttpIntercepterBasicAuthHeaderService, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
