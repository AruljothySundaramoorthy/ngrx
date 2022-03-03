import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserInformation } from './models/user.model';
import { UserService } from './services/user.service';
import { AppState } from './store/app.state';
import { adduser } from './store/user/user.action';
import { getUsers } from './store/user/user.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  userinfo: UserInformation[] = [];
  newuserinfo: UserInformation | undefined;
  constructor(
    private userservice: UserService,
    private userstore: Store<AppState>
  ) {

  }
  ngOnInit(): void {
    // this.newuserinfo = this.userstore.select('user');
    this.getuserinfo();
    for (let i = 0; i <= 3; i++) {
      setTimeout(() => {
        this.getuserinfo();
      }, 3000);
      // setInterval(() => {
      //   this.getuserinfo();
      // }, 3000);
    }
  }
  getuserinfo() {
    this.userservice.getUser().subscribe((data: UserInformation) => {

      this.userstore.dispatch(adduser(data));
      console.log(data, this.userinfo);
    });
  }

  getUsers() {
    this.userstore.pipe(select(getUsers)).subscribe((_data: Array<UserInformation>) => {
      this.userinfo = _data;
      console.log(_data);
    })
  }
}
