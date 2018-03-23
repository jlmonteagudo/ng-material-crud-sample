import { CategoryModule } from './category/category.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { AdminComponent } from './admin.component';
import { CommerceMaterialModule } from '../../commerce-material.module';
import { DemoComponent } from './demo/demo.component';
import { CategoryNewComponent } from './category/category-new/category-new.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommerceMaterialModule
  ],
  declarations: [AdminComponent, DemoComponent, DashboardComponent]
})
export class AdminModule { }
