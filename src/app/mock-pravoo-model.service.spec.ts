import { TestBed } from '@angular/core/testing';

import { MockPravooModelService } from './mock-pravoo-model.service';

describe('MockPravooModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockPravooModelService = TestBed.get(MockPravooModelService);
    expect(service).toBeTruthy();
  });
});
