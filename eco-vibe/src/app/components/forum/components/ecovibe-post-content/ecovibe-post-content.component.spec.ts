import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibePostContentComponent } from './ecovibe-post-content.component';

describe('EcovibePostContentComponent', () => {
  let component: EcovibePostContentComponent;
  let fixture: ComponentFixture<EcovibePostContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibePostContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibePostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
