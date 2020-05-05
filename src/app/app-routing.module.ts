import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoUpdateComponent } from './todo-update/todo-update.component';


const routes: Routes = [
  {path:'login', component:LoginComponent}, // can activate, RouteGuardService to open only satisfy a condition.
  {path:'', component:LoginComponent},
  {path: 'welcome/:name', component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path: 'todo', component:TodoListComponent,canActivate:[RouteGuardService]},
  {path: 'logout', component:LogoutComponent,canActivate:[RouteGuardService]},
  {path: 'update/:id', component:TodoUpdateComponent,canActivate:[RouteGuardService]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
