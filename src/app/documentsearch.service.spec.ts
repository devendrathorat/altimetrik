import { TestBed } from '@angular/core/testing';

import { DocumentsearchService } from './documentsearch.service';

describe('DocumentsearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentsearchService = TestBed.get(DocumentsearchService);
    expect(service).toBeTruthy();
  });
});
