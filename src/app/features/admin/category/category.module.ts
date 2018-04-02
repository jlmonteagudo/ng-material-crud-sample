import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../../../app-material.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryDetailResolver } from './category-detail-resolver.service';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ CategoryListComponent, CategoryNewComponent, CategoryDetailComponent, CategoryEditComponent, CategoryFormComponent ],
  providers: [ CategoryDetailResolver ]
})
export class CategoryModule { }
