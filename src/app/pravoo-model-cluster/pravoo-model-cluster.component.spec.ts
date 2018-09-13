import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PravooModelClusterComponent } from './pravoo-model-cluster.component';

describe('PravooModelClusterComponent', () => {
  let component: PravooModelClusterComponent;
  let fixture: ComponentFixture<PravooModelClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravooModelClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PravooModelClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
