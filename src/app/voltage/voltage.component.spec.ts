import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltageComponent } from './voltage.component';

describe('VoltageComponent', () => {
  let component: VoltageComponent;
  let fixture: ComponentFixture<VoltageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoltageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
