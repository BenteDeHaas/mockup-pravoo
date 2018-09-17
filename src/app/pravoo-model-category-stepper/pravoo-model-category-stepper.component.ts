import { Component, OnInit } from '@angular/core';
import { MockPravooModelService } from './../mock-pravoo-model.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pravoo-model-category-stepper',
  templateUrl: './pravoo-model-category-stepper.component.html',
  styleUrls: ['./pravoo-model-category-stepper.component.css']
})
export class PravooModelCategoryStepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
