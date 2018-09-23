import { Pravoo, Peilpunt } from './../pravoo';
import { Component, OnInit, Input } from '@angular/core';
import { MockPravooModelService } from './../mock-pravoo-model.service';
import { MatInputModule } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-pravoo-model-form',
  templateUrl: './pravoo-model-form.component.html',
  styleUrls: ['./pravoo-model-form.component.css']
})
export class PravooModelFormComponent implements OnInit {

  @Input() pravoo: Pravoo;
  step = 0;
  private newpeilpunt: Peilpunt;
  delpeilpunt: Peilpunt;
  peilpuntFormGroup: FormGroup;
  generalFormGroup: FormGroup;
  displayColumnsPeilpunten = ['peilpunt#', 'peilpuntnaam', 'buttons'];
  dataSource = new MatTableDataSource<Peilpunt>();

  constructor(private _formBuilder: FormBuilder,
    private pravooservice: MockPravooModelService) {
  }

  ngOnInit() {
    this.peilpuntFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.generalFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
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

  addFieldValue() {
    this.newpeilpunt.id = 1;
    this.newpeilpunt.sortorder = this.pravoo.peilpunten.length;
    this.newpeilpunt.name = 'Nieuw peilpunt';
    this.pravoo.peilpunten.push( this.newpeilpunt );
    this.pravooservice.addPeilpunt( this.pravoo , this.newpeilpunt );
  }

  deleteFieldValue( peilpunt ) {
    this.delpeilpunt = peilpunt;
      this.pravooservice.delPeilpunt( this.pravoo , this.delpeilpunt );
  }

}
