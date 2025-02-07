import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeUseDonationsComponent } from './how-we-use-donations.component';

describe('HowWeUseDonationsComponent', () => {
  let component: HowWeUseDonationsComponent;
  let fixture: ComponentFixture<HowWeUseDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWeUseDonationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWeUseDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
