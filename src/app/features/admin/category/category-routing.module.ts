import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryDetailResolver } from './category-detail-resolver.service';
import { CategoryEditComponent } from './category-edit/category-edit.component';

const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'new', component: CategoryNewComponent },
  { path: 'edit/:id', component: CategoryEditComponent, resolve: { category: CategoryDetailResolver } },
  { path: ':id', component: CategoryDetailComponent, resolve: { category: CategoryDetailResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
