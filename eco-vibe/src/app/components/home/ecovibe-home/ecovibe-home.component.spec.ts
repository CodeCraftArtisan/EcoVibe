import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeHomeComponent } from './ecovibe-home.component';

describe('EcovibeHomeComponent', () => {
  let component: EcovibeHomeComponent;
  let fixture: ComponentFixture<EcovibeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
