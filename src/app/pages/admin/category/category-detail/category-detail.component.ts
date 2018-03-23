import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../../services/category/Category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  category: Category;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: any) => this.category = data.category);
  }

}
