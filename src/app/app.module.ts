import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CommerceMaterialModule } from './commerce-material.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/common/not-found/not-found.component';
import { IndexComponent } from './pages/common/index/index.component';
import { AdminModule } from './pages/admin/admin.module';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommerceMaterialModule,
    AppRoutingModule,
    AdminModule,
    ServicesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
