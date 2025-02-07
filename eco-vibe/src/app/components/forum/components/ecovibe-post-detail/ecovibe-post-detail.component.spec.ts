import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibePostDetailComponent } from './ecovibe-post-detail.component';

describe('EcovibePostDetailComponent', () => {
  let component: EcovibePostDetailComponent;
  let fixture: ComponentFixture<EcovibePostDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibePostDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibePostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
