import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Category } from '../../../../services/category/Category';
import { CategoryService } from '../../../../services/category/category.service';
import { CommerceMessageData } from '../../../../components/common/commerce-message-dialog/commerce-message-data';
import { CommerceMessageDialogComponent } from '../../../../components/common/commerce-message-dialog/commerce-message-dialog.component';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent {

  category: Category;

  constructor(private router: Router,
      private route: ActivatedRoute,
      private categoryService: CategoryService,
      private dialog: MatDialog) {

    this.route.data.subscribe((data: any) => {
      this.category = data.category;
    });
  }

  onSubmit(category): void {
    this.categoryService.update(category).subscribe(this.onEditCategorySuccess, this.onNewCategoryError);
  }

  onCancel(): void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  private onEditCategorySuccess = (value: any) => {
    const message = new CommerceMessageData('Edit Category', 'Category updated successfully', 'done', 'success');
    this.dialog.open(CommerceMessageDialogComponent, {data: message});
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  private onNewCategoryError = (error: any) => {
    const message = new CommerceMessageData('Error Category', error.message, 'error_outline', 'error');
    this.dialog.open(CommerceMessageDialogComponent, {data: message});
  }

}
