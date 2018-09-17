import { PravooModellen } from './../mock-pravoo-modellen';
import { Pravoo } from './../pravoo';
import { MockPravooModelService } from './../mock-pravoo-model.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';


// const initialSelection = [];
// const allowMultiSelect = false;

// this.selection = new SelectionModel<Pravoo[]>( allowMultiSelect, initialSelection );

@Component({
  selector: 'app-pravoo-model-table',
  templateUrl: './pravoo-model-table.component.html',
  styleUrls: ['./pravoo-model-table.component.css'],
})

export class PravooModelTableComponent implements OnInit {

  @Input() pravooModellen: Pravoo [];
  expanded: boolean;
  expandedModel: boolean;
  openType: string;

  @Output() selectPravoo: EventEmitter<Pravoo> = new EventEmitter();
  selectedPravoo: Pravoo;
  columnsToDisplay = ['sortorder', 'pravooname', 'iconbuttons'];

  constructor(private pravooservice: MockPravooModelService) {
  }

  ngOnInit() {
    this.expanded = true;
    this.expandedModel = false;
  }

  onSelectPravoo( pravoo: Pravoo ): void {
    this.pravooservice.setSelected( pravoo );
    this.expanded = false;
    this.expandedModel = true;
    this.selectPravoo.emit( pravoo );
    this.selectedPravoo = pravoo;
  }
  onEdit( pravoo: Pravoo ): void {
    this.openType = 'edit';
    this.onSelectPravoo( pravoo );
  }
  onCopy(pravoo: Pravoo): void {
    this.openType = 'copy';
    this.onSelectPravoo( pravoo );
  }
  onOpen(pravoo: Pravoo): void {
    this.openType = 'open';
    this.onSelectPravoo( pravoo );
  }
  onDelete(pravoo: Pravoo): void {
    this.openType = 'delete';
    this.onSelectPravoo( pravoo );
  }
}

