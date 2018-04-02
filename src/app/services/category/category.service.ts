import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Category } from './category';
import { environment } from '../../../environments/environment';
import { Sort, ApiResponse, ServiceError } from '../common';

@Injectable()
export class CategoryService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/categories`;
  }

  get(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  find(search: string, page: number, limit: number, sort: Sort): Observable<ApiResponse<Category>> {
    let params = new HttpParams();

    if (search) { params = params.set('q', search); }
    if (page) { params = params.set('page', page.toString()); }
    if (limit) { params = params.set('limit', limit.toString()); }
    if (sort) { params = params.set('sort', sort.URLparam()); }

    return this.http.get<ApiResponse<Category>>(this.apiUrl, {params});
  }

  insert(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category).pipe(
      catchError(this.handleError)
    );
  }

  update(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${category.id}`, category).pipe(
      catchError(this.handleError)
    );
  }

  delete(category: Category): Observable<Category> {
    return this.http.delete<Category>(`${this.apiUrl}/${category.id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    const message = error.error ? error.error.message : error.statusText;
    return new ErrorObservable(new ServiceError(error.status.toString(), message));
  }

}
