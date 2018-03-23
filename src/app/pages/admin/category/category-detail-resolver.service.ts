import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../../services/category/Category';
import { CategoryService } from '../../../services/category/category.service';

@Injectable()
export class CategoryDetailResolver implements Resolve<Category> {

  constructor(private categoryService: CategoryService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category> {
    const id: string = route.paramMap.get('id');
    return this.categoryService.get(id);
  }
}
