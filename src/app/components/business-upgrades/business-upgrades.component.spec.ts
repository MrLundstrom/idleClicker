import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BusinessUpgradesComponent } from './business-upgrades.component';

describe('BusinessUpgradesComponent', () => {
  let component: BusinessUpgradesComponent;
  let fixture: ComponentFixture<BusinessUpgradesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessUpgradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUpgradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
