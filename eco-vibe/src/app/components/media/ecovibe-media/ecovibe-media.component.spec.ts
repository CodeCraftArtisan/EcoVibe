import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeMediaComponent } from './ecovibe-media.component';

describe('EcovibeMediaComponent', () => {
  let component: EcovibeMediaComponent;
  let fixture: ComponentFixture<EcovibeMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
