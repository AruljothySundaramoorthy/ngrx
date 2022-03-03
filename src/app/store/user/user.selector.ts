import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserInformation } from 'src/app/models/user.model';


export const selectUsers = createFeatureSelector<Array<UserInformation>>('user');


export const getUsers = createSelector(
  selectUsers,
  (users: Array<UserInformation>) => {
    return users;
  }
);
