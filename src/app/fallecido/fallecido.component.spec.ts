import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FallecidoComponent } from './fallecido.component';

describe('FallecidoComponent', () => {
  let component: FallecidoComponent;
  let fixture: ComponentFixture<FallecidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallecidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
