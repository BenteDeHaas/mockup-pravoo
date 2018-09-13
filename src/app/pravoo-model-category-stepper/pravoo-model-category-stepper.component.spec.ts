import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PravooModelCategoryStepperComponent } from './pravoo-model-category-stepper.component';

describe('PravooModelCategoryStepperComponent', () => {
  let component: PravooModelCategoryStepperComponent;
  let fixture: ComponentFixture<PravooModelCategoryStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravooModelCategoryStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PravooModelCategoryStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
