import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { AdminComponent } from './admin.component';
import { DemoComponent } from './demo/demo.component';
import { CategoryNewComponent } from './category/category-new/category-new.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', redirectTo: 'category', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'demo', component: DemoComponent },
    { path: 'category', loadChildren: 'app/pages/admin/category/category.module#CategoryModule' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
