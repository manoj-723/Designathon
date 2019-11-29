import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineNotificationComponent } from './offline-notification.component';

describe('OfflineNotificationComponent', () => {
  let component: OfflineNotificationComponent;
  let fixture: ComponentFixture<OfflineNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
