import { Action, createReducer, on } from '@ngrx/store';
import { UserInformation } from 'src/app/models/user.model';
import { adduser } from './user.action';

// import { retrievedBookList } from './books.actions';
// import { Book } from '../book-list/books.model';

export const initialState: ReadonlyArray<UserInformation> = [];

export const userReducer = createReducer(
  initialState,
  on(adduser, (state, action: UserInformation) => {
    return [...state, action]
  })
);
