import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEcoVibeComponent } from './navbar-eco-vibe.component';

describe('NavbarEcoVibeComponent', () => {
  let component: NavbarEcoVibeComponent;
  let fixture: ComponentFixture<NavbarEcoVibeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarEcoVibeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarEcoVibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
