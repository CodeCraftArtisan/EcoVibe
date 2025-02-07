import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibePostsComponent } from './ecovibe-posts.component';

describe('EcovibePostsComponent', () => {
  let component: EcovibePostsComponent;
  let fixture: ComponentFixture<EcovibePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibePostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
