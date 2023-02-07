import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsLayoutComponent } from './posts-layout.component';

describe('PostsLayoutComponent', () => {
  let component: PostsLayoutComponent;
  let fixture: ComponentFixture<PostsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
