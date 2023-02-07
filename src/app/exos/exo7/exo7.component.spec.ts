import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo7Component } from './exo7.component';

describe('Exo7Component', () => {
  let component: Exo7Component;
  let fixture: ComponentFixture<Exo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
