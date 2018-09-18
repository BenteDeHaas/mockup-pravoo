
import { Component, OnInit, Input } from '@angular/core';
import { MockPravooModelService } from './../mock-pravoo-model.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, Peilpunt, Goal } from '../pravoo';

@Component({
  selector: 'app-pravoo-model-category-stepper',
  templateUrl: './pravoo-model-category-stepper.component.html',
  styleUrls: ['./pravoo-model-category-stepper.component.css']
})
export class PravooModelCategoryStepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  goalColumns = [];

  @Input() PravooGoals: Goal[];
  @Input() isChildCharacteristic: boolean;
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
    this.pravooservice.getSelectedPravoo();

    if ( this.isChildCharacteristic ) {
      this.goalColumns = ['sortorder', 'goalname'];
    } else {
      this.goalColumns = ['sortorder', 'goalname', 'eindgoal'];
    }
  }
}
