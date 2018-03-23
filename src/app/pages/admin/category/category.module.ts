import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CommerceMaterialModule } from '../../../commerce-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryDetailResolver } from './category-detail-resolver.service';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    CommerceMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CategoryListComponent, CategoryNewComponent, CategoryDetailComponent, CategoryEditComponent, CategoryFormComponent],
  providers: [
    CategoryDetailResolver
  ]
})
export class CategoryModule { }
