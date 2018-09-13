import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PravooModelTableComponent } from './pravoo-model-table.component';

describe('PravooModelTableComponent', () => {
  let component: PravooModelTableComponent;
  let fixture: ComponentFixture<PravooModelTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravooModelTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PravooModelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
