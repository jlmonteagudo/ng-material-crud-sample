import { UiModule } from './ui/ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './features/common/not-found/not-found.component';
import { IndexComponent } from './features/common/index/index.component';
import { AdminModule } from './features/admin/admin.module';
import { ServicesModule } from './services/services.module';
import { AppMaterialModule } from './app-material.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    AdminModule,
    ServicesModule,
    UiModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
