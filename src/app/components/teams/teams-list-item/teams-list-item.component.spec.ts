import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsListItemComponent } from './teams-list-item.component';

describe('TeamsListItemComponent', () => {
  let component: TeamsListItemComponent;
  let fixture: ComponentFixture<TeamsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
