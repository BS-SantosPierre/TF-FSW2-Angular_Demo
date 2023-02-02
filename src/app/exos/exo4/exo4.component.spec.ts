import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo4Component } from './exo4.component';

describe('Exo4Component', () => {
  let component: Exo4Component;
  let fixture: ComponentFixture<Exo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
