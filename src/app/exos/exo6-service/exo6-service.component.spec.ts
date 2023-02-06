import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exo6ServiceComponent } from './exo6-service.component';


describe('Exo6Component', () => {
  let component: Exo6ServiceComponent;
  let fixture: ComponentFixture<Exo6ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo6ServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo6ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
