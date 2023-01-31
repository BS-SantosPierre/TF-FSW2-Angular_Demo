import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo1Component } from './exo1.component';

describe('Exo1Component', () => {
  let component: Exo1Component;
  let fixture: ComponentFixture<Exo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
