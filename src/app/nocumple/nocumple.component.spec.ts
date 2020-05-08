import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NocumpleComponent } from './nocumple.component';

describe('NocumpleComponent', () => {
  let component: NocumpleComponent;
  let fixture: ComponentFixture<NocumpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NocumpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NocumpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
