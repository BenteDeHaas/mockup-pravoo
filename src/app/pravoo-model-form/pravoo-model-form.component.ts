import { Component, OnInit } from '@angular/core';
import { MockPravooModelService } from './../mock-pravoo-model.service';

@Component({
  selector: 'app-pravoo-model-form',
  templateUrl: './pravoo-model-form.component.html',
  styleUrls: ['./pravoo-model-form.component.css']
})
export class PravooModelFormComponent implements OnInit {

  step = 0;
  constructor() { }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
