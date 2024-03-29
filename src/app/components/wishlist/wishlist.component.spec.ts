import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhislistComponent } from './wishlist.component';

describe('WishlistComponent', () => {
  let component: WhislistComponent;
  let fixture: ComponentFixture<WhislistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhislistComponent]
    });
    fixture = TestBed.createComponent(WhislistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
