import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedListsComponent } from './breed-lists.component';

describe('BreedListsComponent', () => {
  let component: BreedListsComponent;
  let fixture: ComponentFixture<BreedListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreedListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreedListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
