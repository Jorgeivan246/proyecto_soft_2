import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',

})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // formReg: FormGroup;
  // constructor(
  //   private userService: UserService,
  //   private router: Router
  // ) {
  //   this.formReg = new FormGroup({
  //     email: new FormControl(),
  //     password: new FormControl()
  //   })
  // }
  // ngOnInit(): void {

  // }


  // onSubmit() {
  //   this.userService.register(this.formReg.value)
  //     .then(response => {
  //       console.log(response);
  //       this.router.navigate(['/home']);
  //     })
  //     .catch(error => console.log(error));
  // }




}
