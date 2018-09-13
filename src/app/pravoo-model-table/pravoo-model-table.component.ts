import { PravooModellen } from './../mock-pravoo-modellen';
import { Pravoo } from './../pravoo';
import { MockPravooModelService } from './../mock-pravoo-model.service';
import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

// const initialSelection = [];
// const allowMultiSelect = false;

// this.selection = new SelectionModel<Pravoo[]>( allowMultiSelect, initialSelection );

@Component({
  selector: 'app-pravoo-model-table',
  templateUrl: './pravoo-model-table.component.html',
  styleUrls: ['./pravoo-model-table.component.css']
})

export class PravooModelTableComponent implements OnInit {

  pravooModellen: Pravoo [];
  columnsToDisplay = ['sortorder', 'pravooname', 'iconview', 'iconcopy', 'iconedit', 'icondelete'];

  constructor(private pravooservice: MockPravooModelService) { }

  ngOnInit() {
    this.getPravoo();
  }

  getPravoo(): void {
    this.pravooModellen = this.pravooservice.getPravooModels();
  }

}
