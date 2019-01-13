import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListMainComponent } from './post-list-main.component';

describe('PostListMainComponent', () => {
  let component: PostListMainComponent;
  let fixture: ComponentFixture<PostListMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
