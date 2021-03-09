import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BusinessesComponent } from './businesses.component';

describe('BusinessesComponent', () => {
  let component: BusinessesComponent;
  let fixture: ComponentFixture<BusinessesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
