import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userList: Array<User> = [];
  user: User = new User();

  constructor() {
  }
  addUser(): void {
    this.userList.push(this.user);
    this.user = new User();
  }
  test(): void {
    let user1: User = new User();
    user1.userName = '낭만코알라';
    user1.userAge = 21;
    this.userList.push(user1);
    user1 = new User();
    user1.userName = '낭코아저씨';
    user1.userAge = 18;
    this.userList.push(user1);
  }
}
