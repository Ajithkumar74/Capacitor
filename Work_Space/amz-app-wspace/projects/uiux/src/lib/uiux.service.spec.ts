import { TestBed } from '@angular/core/testing';

import { UiuxService } from './uiux.service';

describe('UiuxService', () => {
  let service: UiuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
