import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryMenuComponent } from './library.component';

describe('LibraryComponent', () => {
  let component: LibraryMenuComponent;
  let fixture: ComponentFixture<LibraryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
