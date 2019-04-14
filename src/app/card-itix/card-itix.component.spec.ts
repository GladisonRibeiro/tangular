import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItixComponent } from './card-itix.component';

describe('CardItixComponent', () => {
  let component: CardItixComponent;
  let fixture: ComponentFixture<CardItixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardItixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
