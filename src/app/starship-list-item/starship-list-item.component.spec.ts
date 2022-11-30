import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipListItemComponent } from './starship-list-item.component';

describe('ListItemComponent', () => {
  let component: StarshipListItemComponent;
  let fixture: ComponentFixture<StarshipListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarshipListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StarshipListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
