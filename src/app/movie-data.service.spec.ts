import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MovieDataService } from './movie-data.service';

describe('MovieDataService', () => {
  let service: MovieDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useValue: {} },
      ]
    })
    .compileComponents();
    });
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
