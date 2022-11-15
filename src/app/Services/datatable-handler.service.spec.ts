import { TestBed } from '@angular/core/testing';

import { DatatableHandlerService } from './datatable-handler.service';

describe('DatatableHandlerService', () => {
  let service: DatatableHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatableHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
