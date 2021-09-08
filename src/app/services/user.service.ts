import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  listUsers() {
    return this.http.get("https://jsonplaceholder.cypress.io/users");
  }

  showUser(id: any) {
    return this.http.get("https://jsonplaceholder.cypress.io/users/" + id);
  }

  addUser(userObj: any) {
    return this.http.post("https://jsonplaceholder.cypress.io/users/", userObj);

  }
  deleteUser(id: any) {
    return this.http.delete("https://jsonplaceholder.cypress.io/users/" + id);
  }

  editUser(id: any, userObj: any) {
    return this.http.put("https://jsonplaceholder.cypress.io/users/" + id, userObj);
  }
}
