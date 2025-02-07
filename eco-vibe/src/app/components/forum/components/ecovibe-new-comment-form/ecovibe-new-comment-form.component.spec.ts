import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeNewCommentFormComponent } from './ecovibe-new-comment-form.component';

describe('EcovibeNewCommentFormComponent', () => {
  let component: EcovibeNewCommentFormComponent;
  let fixture: ComponentFixture<EcovibeNewCommentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeNewCommentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeNewCommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
