import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTypes } from './entity-types';

describe('EntityTypes', () => {
  let component: EntityTypes;
  let fixture: ComponentFixture<EntityTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityTypes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
