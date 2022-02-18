import { IMovieTitle } from './../store/store.state';

export const UPDATE_TITLE = 'UPDATE_TITLE';


const initialState: Array<IMovieTitle> = [
    {
      title: 'Kung Fu Panda',
    },
  ];

export function updateTitleReducer(state: IMovieTitle[] = initialState, action: any) {
  switch (action.type) {
    case UPDATE_TITLE:
        return action.payload;
    default:
        return state;
    }
}
