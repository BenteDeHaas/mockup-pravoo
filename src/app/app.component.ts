import { MockPravooModelService } from './mock-pravoo-model.service';
import { Pravoo } from './pravoo';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mockup-pravoo';
  pravooModellen: Pravoo[];
  selectedPravooModel: Pravoo;

  constructor(private pravooservice: MockPravooModelService) {
    this.getPravoo();
   }

  getPravoo(): void {
    this.pravooModellen = this.pravooservice.getPravooModels();
  }
}
