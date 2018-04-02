import { CategoryModule } from './category/category.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { AdminComponent } from './admin.component';
import { CategoryNewComponent } from './category/category-new/category-new.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppMaterialModule } from '../../app-material.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppMaterialModule
  ],
  declarations: [AdminComponent, DashboardComponent]
})
export class AdminModule { }
