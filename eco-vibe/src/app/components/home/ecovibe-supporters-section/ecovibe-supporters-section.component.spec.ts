import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeSupportersSectionComponent } from './ecovibe-supporters-section.component';

describe('EcovibeSupportersSectionComponent', () => {
  let component: EcovibeSupportersSectionComponent;
  let fixture: ComponentFixture<EcovibeSupportersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeSupportersSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeSupportersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
