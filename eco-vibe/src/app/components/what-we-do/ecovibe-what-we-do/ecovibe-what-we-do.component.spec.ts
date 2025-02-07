import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeWhatWeDoComponent } from './ecovibe-what-we-do.component';

describe('EcovibeWhatWeDoComponent', () => {
  let component: EcovibeWhatWeDoComponent;
  let fixture: ComponentFixture<EcovibeWhatWeDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeWhatWeDoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeWhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
