import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceGifComponent } from './nice-gif.component';

describe('NiceGifComponent', () => {
  let component: NiceGifComponent;
  let fixture: ComponentFixture<NiceGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiceGifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiceGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
