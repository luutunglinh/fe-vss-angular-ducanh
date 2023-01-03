import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { user } from 'src/app/model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private http: HttpService, private router: Router) { }

  users: user[] = [{ id: 1, username: 'test', address: 'test', phone: '041864654', role: 1 }];

  ngOnInit(): void {
    // this.users = this.http.getUsers();
    // console.log('component', this.users);
  }

  delete(arg0: number) {
    throw new Error('Method not implemented.');
  }
  edit(_t30: user) {
    throw new Error('Method not implemented.');
  }
  create() {
    throw new Error('Method not implemented.');
  }




}
