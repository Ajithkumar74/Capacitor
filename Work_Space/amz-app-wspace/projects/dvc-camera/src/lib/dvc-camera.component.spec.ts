import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvcCameraComponent } from './dvc-camera.component';

describe('DvcCameraComponent', () => {
  let component: DvcCameraComponent;
  let fixture: ComponentFixture<DvcCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvcCameraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvcCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
