import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[])=>{
      this.userList = users;
    })
    this.userService.usersChanged.subscribe((newUserList: User[])=>{
      this.userList = newUserList;
    })
  }

  handleDelete(id: number) {
    this.userService.deleteUser(id);
  }

}
