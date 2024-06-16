import { TestBed } from '@angular/core/testing';

import { DvcCameraService } from './dvc-camera.service';

describe('DvcCameraService', () => {
  let service: DvcCameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DvcCameraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
