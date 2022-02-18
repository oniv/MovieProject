import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
import { IMovie } from '../data/data.model';
import { MovieDataService } from '../movie-data.service';
import { AppState, IMovieTitle } from '../store/store.state';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies: any; 
  selectedMovie?: IMovie;
  name = "";
  imgURL = "";
  details = {} as IMovie;
  constructor(public moviedata:MovieDataService, public store: Store<AppState>) {}

  ngOnInit(): void {
    this.getmovielist();
    setTimeout(() => {
      this.selectedMovie = this.movies[0];
      this.name = this.movies[0].name;
      this.imgURL = this.movies[0].image;
      this.details = this.movies[0];
      this.updateTitle(this.movies[0].name);
    }, 100);
  }

  updateTitle(name: string) {
    this.store.dispatch({
      type: 'UPDATE_TITLE',
      payload: <IMovieTitle> {
        title: name
      }
    });
  }

  getmovielist(): void {
    this.moviedata.getData().subscribe((res) => {
      this.movies = res;
    }
    );
  }
  
  onSelect(movie: IMovie): void {
    this.selectedMovie = movie;
    // this.name = movie.name;
    this.imgURL = movie.image;
    this.details = movie;
    this.updateTitle(movie.name);
  }

}
