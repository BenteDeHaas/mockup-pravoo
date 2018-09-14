import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatStepperModule } from '@angular/material/stepper';

// import { MatInputModule } from '@angular/material/input';

// import { MatSelectModule } from '@angular/material/select';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatTableModule } from '@angular/material/table';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatIconModule } from '@angular/material/icon';



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
    MatStepperModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
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
