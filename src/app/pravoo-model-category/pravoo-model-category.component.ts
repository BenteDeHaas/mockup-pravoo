import { Component, OnInit, Input } from '@angular/core';
import { MockPravooModelService } from './../mock-pravoo-model.service';
import { Category, Peilpunt } from '../pravoo';
import { MatInputModule } from '@angular/material';

export interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pravoo-model-category',
  templateUrl: './pravoo-model-category.component.html',
  styleUrls: ['./pravoo-model-category.component.css']
})
export class PravooModelCategoryComponent implements OnInit {

  types: Type[] = [
    {value: 'L', viewValue: 'Leerlijn'},
    {value: 'K', viewValue: 'Kindkenmerk'}
  ];
  @Input() pravooCategories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
