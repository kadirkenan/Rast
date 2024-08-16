import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAnimationComponent } from './login-animationcomponent';

describe('LoginAnimationComponent', () => {
  let component: LoginAnimationComponent;
  let fixture: ComponentFixture<LoginAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
