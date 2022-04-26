import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfGpFormComponent } from './prof-gp-form.component';

describe('ProfGpFormComponent', () => {
  let component: ProfGpFormComponent;
  let fixture: ComponentFixture<ProfGpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfGpFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfGpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
