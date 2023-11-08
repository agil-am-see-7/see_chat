import { TestBed } from '@angular/core/testing';

import { ChatAlertService } from './chat-alert.service';

describe('ChatAlertService', () => {
  let service: ChatAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
