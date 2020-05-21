import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  validMessage: string = "";
  constructor() { }

  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   username: new FormControl ('', Validators.required),
    //   password: new FormControl ('', Validators.required)
    // })
  }
  // submitLogin(){
  //   if(this.loginForm.valid){
  //     //this.validMessage = "Your character has been recorded. They're not the messiah, They're a very naughty character, now piss off";
  //     /*this.characterService.createCharacter(this.characterForm.value).subscribe(
  //       data => {
  //         this.characterForm.reset();
  //         return true;
  //       },
  //       error => {
  //         return Observable.throw(error);
  //       }
  //     )*/
  //   } else {
  //     this.validMessage = "Look; fill out the god damn form for peet's sake, he's a nice guy, don't abandon him now";
  //   }
  // }

}
