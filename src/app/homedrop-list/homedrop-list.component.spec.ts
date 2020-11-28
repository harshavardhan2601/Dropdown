import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedropListComponent } from './homedrop-list.component';

describe('HomedropListComponent', () => {
  let component: HomedropListComponent;
  let fixture: ComponentFixture<HomedropListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedropListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
