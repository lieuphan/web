import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalkComponent } from './chalk.component';

describe('ChalkComponent', () => {
  let component: ChalkComponent;
  let fixture: ComponentFixture<ChalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
