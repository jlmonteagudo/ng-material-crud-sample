import { ApiResponse } from './../../../../services/common/apiResponse';
import { catchError, finalize } from 'rxjs/operators';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Category } from '../../../../services/category/Category';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CategoryService } from '../../../../services/category/category.service';
import { Sort } from '../../../../services/common/sort';

export class CategoryListDataSource implements DataSource<Category> {

  private categorySubject = new BehaviorSubject<Category[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private countSubject = new BehaviorSubject<number>(0);

  public loading$ = this.loadingSubject.asObservable();
  public count$ = this.countSubject.asObservable();

  constructor(private categoryService: CategoryService) {}

  connect(collectionViewer: CollectionViewer): Observable<Category[]> {
    return this.categorySubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.categorySubject.complete();
    this.loadingSubject.complete();
    this.countSubject.complete();
  }

  find(search: string, page: number, limit: number, sort: Sort) {
    this.loadingSubject.next(true);
    this.categoryService.find(search, page, limit, sort).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((response: ApiResponse<Category>) => {
      this.categorySubject.next(response.entities);
      this.countSubject.next(response.count);
    });
  }

}
