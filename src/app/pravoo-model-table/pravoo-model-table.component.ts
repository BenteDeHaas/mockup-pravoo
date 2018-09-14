import { PravooModellen } from './../mock-pravoo-modellen';
import { Pravoo } from './../pravoo';
import { MockPravooModelService } from './../mock-pravoo-model.service';
import { Component, OnInit, Input, Output } from '@angular/core';
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

  @Input() pravooModellen: Pravoo [];
  expanded: boolean;
  openType: string;
  @Output() selectedPravoo: Pravoo;
  columnsToDisplay = ['sortorder', 'pravooname', 'iconbuttons'];

  constructor() { }

  ngOnInit() {
    this.expanded = true;
  }

  onEdit(pravoo: Pravoo): void {
    this.selectedPravoo = pravoo;
    this.openType = 'edit';
    this.expanded = false;
  }
  onCopy(pravoo: Pravoo): void {
    this.selectedPravoo = pravoo;
    this.openType = 'copy';
    this.expanded = false;
  }
  onOpen(pravoo: Pravoo): void {
    this.selectedPravoo = pravoo;
    this.openType = 'open';
    this.expanded = false;
  }
  onDelete(pravoo: Pravoo): void {
    this.selectedPravoo = pravoo;
    this.openType = 'delete';
    this.expanded = false;
  }
}

