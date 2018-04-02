import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Category } from '../../../../services/category/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnChanges {

  categoryForm: FormGroup;
  @Input() category: Category;
  @Output() submit = new EventEmitter<Category>();
  @Output() cancel = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.createForm();
    if (this.category) { this.categoryForm.patchValue(this.category); }
  }

  createForm(): void {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.category = changes.category.currentValue;
    if (this.category) { this.categoryForm.patchValue(this.category); }
  }

  onSubmit(): void {
    const category = { ...this.category, ...this.categoryForm.value };
    this.submit.emit(category);
  }

  onCancel(): void {
    this.cancel.emit();
  }

}
