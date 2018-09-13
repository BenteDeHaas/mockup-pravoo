import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PravooModelFormComponent } from './pravoo-model-form.component';

describe('PravooModelFormComponent', () => {
  let component: PravooModelFormComponent;
  let fixture: ComponentFixture<PravooModelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravooModelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PravooModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
