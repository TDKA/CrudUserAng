import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      "username": new FormControl('', [Validators.required, Validators.minLength(3)]),
      "email": new FormControl('', [Validators.required, Validators.minLength(3)]),
      'phone': new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  addUser() {
    this.userService.addUser(this.addUserForm.value).subscribe(data => {
      console.log("User added");

    }, err => {
      console.log(err);

    })

  }
}
