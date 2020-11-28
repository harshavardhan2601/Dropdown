import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedropAddComponent } from './homedrop-add.component';

describe('HomedropAddComponent', () => {
  let component: HomedropAddComponent;
  let fixture: ComponentFixture<HomedropAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedropAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedropAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
