import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../../../services/category/category.service';
import { CommerceMessageDialogComponent } from '../../../../components/common/commerce-message-dialog/commerce-message-dialog.component';
import { CommerceMessageData } from '../../../../components/common/commerce-message-dialog/commerce-message-data';
import { Category } from '../../../../services/category/Category';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private dialog: MatDialog) { }

  onSubmit(category: Category): void {
    this.categoryService.insert(category).subscribe(this.onNewCategorySuccess, this.onNewCategoryError);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private onNewCategorySuccess = (value: any) => {
    const message = new CommerceMessageData('New Category', 'Category created successfully', 'done', 'success');
    this.dialog.open(CommerceMessageDialogComponent, {data: message});
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private onNewCategoryError = (error: any) => {
    const message = new CommerceMessageData('Error Category', error.message, 'error_outline', 'error');
    this.dialog.open(CommerceMessageDialogComponent, {data: message});
  }

}
