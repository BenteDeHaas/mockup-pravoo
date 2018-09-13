import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PravooModelCategoryComponent } from './pravoo-model-category.component';

describe('PravooModelCategoryComponent', () => {
  let component: PravooModelCategoryComponent;
  let fixture: ComponentFixture<PravooModelCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravooModelCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PravooModelCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
