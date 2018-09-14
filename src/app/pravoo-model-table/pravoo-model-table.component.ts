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

  expanded: boolean;
  pravooModellen: Pravoo [];
  selectedPravoo: Pravoo;
  columnsToDisplay = ['sortorder', 'pravooname', 'iconbuttons'];

  constructor(private pravooservice: MockPravooModelService) { }

  ngOnInit() {
    this.getPravoo();
    this.expanded = true;
  }

  getPravoo(): void {
    this.pravooModellen = this.pravooservice.getPravooModels();
  }

  onEdit(pravoo: Pravoo): void {
    this.selectedPravoo = pravoo;
    this.expanded = false;
  }
  onCopy(pravoo: Pravoo): void {
    this.selectedPravoo = pravoo;
    this.expanded = false;
  }
  onOpen(pravoo: Pravoo): void {
    this.selectedPravoo = pravoo;
    this.expanded = false;
  }
  onDelete(pravoo: Pravoo): void {
    this.selectedPravoo = pravoo;
    this.expanded = false;
  }

}

