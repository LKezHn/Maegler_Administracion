import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAcceptDriversComponent } from './for-accept-drivers.component';

describe('ForAcceptDriversComponent', () => {
  let component: ForAcceptDriversComponent;
  let fixture: ComponentFixture<ForAcceptDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForAcceptDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForAcceptDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
