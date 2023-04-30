import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingcontentComponent } from './hostingcontent.component';

describe('HostingcontentComponent', () => {
  let component: HostingcontentComponent;
  let fixture: ComponentFixture<HostingcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
