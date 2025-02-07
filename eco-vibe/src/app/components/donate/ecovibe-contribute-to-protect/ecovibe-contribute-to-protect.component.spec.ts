import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeContributeToProtectComponent } from './ecovibe-contribute-to-protect.component';

describe('EcovibeContributeToProtectComponent', () => {
  let component: EcovibeContributeToProtectComponent;
  let fixture: ComponentFixture<EcovibeContributeToProtectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeContributeToProtectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeContributeToProtectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
