import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userId: any = "";

  showUser: any;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(data => {
      this.userId = data.id;
    })
    this.userService.showUser(this.userId).subscribe(data => {
      this.showUser = data;
      console.log(data);

    })
  }

}
