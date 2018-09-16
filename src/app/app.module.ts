import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';



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
    // MatIconModule,
    // MatDatepickerModule,
    // MatStepperModule,
    // MatFormFieldModule,
    // MatFormFieldModule,
    // MatExpansionModule,
    // MatTableModule,
    // MatCheckboxModule,
    // MatSelectModule,
    // MatInputModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatIconModule,
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
