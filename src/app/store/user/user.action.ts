import { createAction, props } from '@ngrx/store';
import { UserInformation } from 'src/app/models/user.model';
// import { user } from '../user-list/users.model';

export const adduser = createAction(
  '[User Info] Add User',
  props<UserInformation>()
);

export const edituser = createAction(
  '[User Info] Add User',
  props<{ userId: string }>()
);

export const removeuser = createAction(
  '[User Info] Remove user',
  props<{ userId: string }>()
);

export const retrieveduserList = createAction(
  '[User Info] Retrieve users Success',
  props<{ users: ReadonlyArray<UserInformation> }>()
);
