import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { MovieDataService } from '../movie-data.service';

import { MovieListComponent } from './movie-list.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      imports: [ StoreModule.forRoot({})],
      providers: [
        {
          provide: HttpClient, useValue: {
            get: () => { }
          }
        },
        {
          provide: MovieDataService, useValue: {
            getData: () => {
              return of();
             },
             subscribe: () => {}
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, "getmovielist");
    
  });

  it('should create', () => {
    spyOn(component.moviedata, "getData").and.returnValue(of('assets/data.json'));
    expect(component).toBeTruthy();
  });
  
  it('should dispatch event', () => {
    spyOn(component, "updateTitle");
    component.updateTitle("test");
    expect(component.updateTitle).toHaveBeenCalledWith("test");
  });
});
