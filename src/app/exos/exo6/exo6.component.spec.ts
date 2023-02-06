import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo6Component } from './exo6.component';

describe('Exo6Component', () => {
  let component: Exo6Component;
  let fixture: ComponentFixture<Exo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
