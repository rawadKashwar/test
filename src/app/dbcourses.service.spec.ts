import { TestBed } from '@angular/core/testing';

import { DbcoursesService } from './dbcourses.service';

describe('DbcoursesService', () => {
  let service: DbcoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbcoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
