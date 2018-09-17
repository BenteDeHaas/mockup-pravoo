import { MockPravooModelService } from './mock-pravoo-model.service';
import { Pravoo } from './pravoo';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';



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

  onSelectPravoo (pravoo: Pravoo): void {
    this.selectedPravooModel = pravoo;
    // this.pravooservice.getSelectedPravoo();
  }

  getPravoo(): void {
    this.pravooModellen = this.pravooservice.getPravooModels();
  }
}
