import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompositionDetailsComponent} from './composition/composition-details/composition-details.component';
import {CompositionListComponent} from './composition/composition-list/composition-list.component';
import {MainComponent} from './main/main.component';
import {LogInComponent} from './log-in/log-in.component';
import {CompositionAddComponent} from './composition/composition-add/composition-add.component';
import {AuthGuard} from './guards/AuthGuard';
import {Role} from './models/role';
import {RequestAddComponent} from './request/request-add/request-add.component';
import {RequestListComponent} from './request/request-list/request-list.component';
import {RequestDetailsComponent} from './request/request-details/request-details.component';


const routes: Routes = [  {
  path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'composition/:id', component: CompositionDetailsComponent, canActivate: [AuthGuard], data: {role: Role.Admin}},
  {path: 'compositions', component: CompositionListComponent, canActivate: [AuthGuard], data: {role: Role.Admin}},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LogInComponent},
  {path: 'composition-add', component: CompositionAddComponent, canActivate: [AuthGuard], data: {role: Role.Admin}},
  {path: 'request-add', component: RequestAddComponent},
  {path: 'requests', component: RequestListComponent, canActivate: [AuthGuard], data: {role: Role.Admin}},
  {path: 'request/:id', component: RequestDetailsComponent, canActivate: [AuthGuard], data: {role: Role.Admin}},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
