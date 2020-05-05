import { TestBed } from '@angular/core/testing';

import { HttpIntercepterBasicAuthHeaderService } from './http-intercepter-basic-auth-header.service';

describe('HttpIntercepterBasicAuthHeaderService', () => {
  let service: HttpIntercepterBasicAuthHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpIntercepterBasicAuthHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
