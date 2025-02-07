import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeCommentListComponent } from './ecovibe-comment-list.component';

describe('EcovibeCommentListComponent', () => {
  let component: EcovibeCommentListComponent;
  let fixture: ComponentFixture<EcovibeCommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeCommentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
