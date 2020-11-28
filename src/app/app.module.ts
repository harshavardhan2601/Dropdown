import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import {AuthService} from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HomedropAddComponent } from './homedrop-add/homedrop-add.component';
import { HomedropListComponent } from './homedrop-list/homedrop-list.component';
import { StateComponent } from './state/state.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    HomedropAddComponent,
    HomedropListComponent,
    StateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
