import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { AppState } from '../store/store.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.title$ = this.store.select(state => state.title)
    .pipe(
      map(title => title.title),
      tap(data => console.log(data))
    );
   }

}
