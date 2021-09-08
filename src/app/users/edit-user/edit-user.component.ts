import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  userId: any;
  userDetails: any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.route.params.subscribe(data => {
      this.userId = data.id;
    })

    if (this.userId !== '') {
      this.userService.showUser(this.userId)
        .toPromise().then(data => {

          this.userDetails = data;
          Object.assign(this.userDetails, data);
          console.log(this.userDetails);

          //Build edit form

          this.editUserForm = this.formBuilder.group({
            "name": new FormControl(this.userDetails.name),
            "email": new FormControl(this.userDetails.email),
            "phone": new FormControl(this.userDetails.phone)
          })
          this.dataLoaded = true;
        })

        .catch(err => {
          console.log(err);

        })

    }
  }

  updateUser() {
    console.log(this.editUserForm.value);

    this.userService.editUser(this.userId, this.editUserForm.value).subscribe(data => {
      console.log("Edit was successfull");

    }, err => {
      console.log("Error"!);

    })

  }

}
