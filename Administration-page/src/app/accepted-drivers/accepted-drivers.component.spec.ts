import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedDriversComponent } from './accepted-drivers.component';

describe('AcceptedDriversComponent', () => {
  let component: AcceptedDriversComponent;
  let fixture: ComponentFixture<AcceptedDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
