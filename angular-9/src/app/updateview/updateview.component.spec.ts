import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateviewComponent } from './updateview.component';

describe('UpdateviewComponent', () => {
  let component: UpdateviewComponent;
  let fixture: ComponentFixture<UpdateviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
