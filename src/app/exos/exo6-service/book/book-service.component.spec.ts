import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookServiceComponent } from './book-service.component';


describe('BookComponent', () => {
  let component: BookServiceComponent;
  let fixture: ComponentFixture<BookServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
