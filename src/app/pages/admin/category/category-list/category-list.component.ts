import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { CategoryService } from '../../../../services/category/category.service';
import { Category } from '../../../../services/category/category';
import { CategoryListDataSource } from './category-list.datasource';
import { Observable } from 'rxjs/Observable';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Sort } from '../../../../services/common/sort';
import { CommerceYesNoDialogComponent } from '../../../../components/common/commerce-yesno-dialog/commerce-yesno-dialog.component';
import { CommerceYesNoData } from '../../../../components/common/commerce-yesno-dialog/commerce-yesno-data';
import { CommerceMessageData } from '../../../../components/common/commerce-message-dialog/commerce-message-data';
import { CommerceMessageDialogComponent } from '../../../../components/common/commerce-message-dialog/commerce-message-dialog.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, AfterViewInit {

  DEFAULT_PAGE_SIZE = 5;
  DEFAULT_FIRST_PAGE = 1;

  dataSource: CategoryListDataSource;
  categoryColumns = ['name', 'description', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('search') search: ElementRef;

  constructor(private categoryService: CategoryService, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new CategoryListDataSource(this.categoryService);
    this.dataSource.find(null, this.DEFAULT_FIRST_PAGE, this.DEFAULT_PAGE_SIZE, null);
  }

  ngAfterViewInit() {

    this.sort.sortChange.pipe(tap(() => this.paginator.pageIndex = 0)).subscribe(() => this.find());
    this.paginator.page.subscribe(() => this.find());

    fromEvent(this.search.nativeElement, 'keyup').pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.paginator.pageIndex = 0)
    ).subscribe(() => this.find());

  }

  private find() {
    this.dataSource.find(this.search.nativeElement.value, this.paginator.pageIndex + 1, this.paginator.pageSize, this.paramSort());
  }

  private paramSort(): Sort {
    return (this.sort.direction !== '') ? new Sort(this.sort.active, this.sort.direction) : null;
  }

  private confirmDeletion(category: Category) {
    // tslint:disable-next-line:max-line-length
    const message = new CommerceYesNoData('Delete Category?', `Are you sure that you want to delete ${category.name}?`, 'question_answer', 'question');
    this.dialog.open(CommerceYesNoDialogComponent, {data: message})
      .afterClosed()
      .subscribe((hasToDelete: boolean) => {
        if (hasToDelete) {
          this.categoryService.delete(category).subscribe(onDeleteCategorySuccess, onDeleteCategoryError);
        }
      });

      const onDeleteCategorySuccess = (value: any) => {
        const deleteMessage = new CommerceMessageData('Delete Category', 'Category deleted successfully', 'done', 'success');
        this.dialog.open(CommerceMessageDialogComponent, {data: deleteMessage});
        this.find();
      };

      const onDeleteCategoryError = (error: any) => {
        const deleteMessage = new CommerceMessageData('Delete Category', error.message, 'error_outline', 'error');
        this.dialog.open(CommerceMessageDialogComponent, {data: deleteMessage});
      };

  }

}
