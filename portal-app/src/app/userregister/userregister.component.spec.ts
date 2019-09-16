import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregisterComponent } from './userregister.component';

describe('UserregisterComponent', () => {
  let component: UserregisterComponent;
  let fixture: ComponentFixture<UserregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
