import { Component, OnInit, Input } from '@angular/core';
import { MockPravooModelService } from './../mock-pravoo-model.service';
import { Category, Peilpunt, Goal, Pravoo } from '../pravoo';
import { MatInputModule } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface Type {
  isChildCharacteristic: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-pravoo-model-category',
  templateUrl: './pravoo-model-category.component.html',
  styleUrls: ['./pravoo-model-category.component.css']
})
export class PravooModelCategoryComponent implements OnInit {

  @Input() pravooCategories: Category[];

  isChildChar: boolean;
  Pravoo: Pravoo;
  selectedCategory: Category;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  goalColumns = ['sortorder', 'goalname', 'eindgoal', 'buttons'];

  types: Type[] = [
    {isChildCharacteristic: true, viewValue: 'Leerlijn'},
    {isChildCharacteristic: false, viewValue: 'Kindkenmerk'}
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private pravooservice: MockPravooModelService
    ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.Pravoo = this.pravooservice.getSelectedPravoo();
    this.selectedCategory = this.pravooCategories[2];
  }

  onSelectType(category: Category, value: boolean): void {
    if (value === true) {
      category.isChildCharacteristic = true;
      this.isChildChar = true;
    } else {
      category.isChildCharacteristic = false;
      this.isChildChar = false;
    }
    this.selectedCategory = category;
  }

  onSelectCategory(category: Category): void {
    this.isChildChar = category.isChildCharacteristic;
    this.selectedCategory = category;
  }

}
