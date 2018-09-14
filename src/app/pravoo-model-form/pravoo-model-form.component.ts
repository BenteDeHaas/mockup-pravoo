import { Pravoo } from './../pravoo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pravoo-model-form',
  templateUrl: './pravoo-model-form.component.html',
  styleUrls: ['./pravoo-model-form.component.css']
})
export class PravooModelFormComponent implements OnInit {

  @Input() pravoo: Pravoo;
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
