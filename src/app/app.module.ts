import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  EventEmitter,
  Component,
  OnInit,
  Input,
  Output
} from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatNativeDateModule,
    MatButtonToggleModule,
  } from '@angular/material';

import { AppComponent } from './app.component';
import { PravooModelTableComponent } from './pravoo-model-table/pravoo-model-table.component';
import { PravooModelFormComponent } from './pravoo-model-form/pravoo-model-form.component';
import { PravooModelClusterComponent } from './pravoo-model-cluster/pravoo-model-cluster.component';
import { PravooModelCategoryComponent } from './pravoo-model-category/pravoo-model-category.component';
import { PravooModelCategoryStepperComponent } from './pravoo-model-category-stepper/pravoo-model-category-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    PravooModelTableComponent,
    PravooModelFormComponent,
    PravooModelClusterComponent,
    PravooModelCategoryComponent,
    PravooModelCategoryStepperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
