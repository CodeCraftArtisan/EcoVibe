import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeContactComponent } from './ecovibe-contact.component';

describe('EcovibeContactComponent', () => {
  let component: EcovibeContactComponent;
  let fixture: ComponentFixture<EcovibeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
