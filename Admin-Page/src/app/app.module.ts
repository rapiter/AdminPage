import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import {AuthGuard} from './guards/AuthGuard';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CompositionDetailsComponent } from './composition/composition-details/composition-details.component';
import { CompositionAddComponent } from './composition/composition-add/composition-add.component';
import { CompositionListComponent } from './composition/composition-list/composition-list.component';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainComponent } from './main/main.component';
import { RequestAddComponent } from './request/request-add/request-add.component';
import { RequestDetailsComponent } from './request/request-details/request-details.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CompositionDetailsComponent,
    CompositionAddComponent,
    CompositionListComponent,
    HeaderComponent,
    MainComponent,
    RequestAddComponent,
    RequestDetailsComponent,
    RequestListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    ScrollingModule,
    MatGridListModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
