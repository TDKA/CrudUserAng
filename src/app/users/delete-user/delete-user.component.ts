import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  userId: string = '';
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.userId = data.id
    })

    if (this.userId) {
      this.userService.deleteUser(this.userId).subscribe(data => {
        alert("Delete was successfully")
        this.router.navigate(['list'])

      }, err => {
        alert("Error !")
      })
    }
  }

}
