import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthState } from 'aws-amplify-angular/dist/src/providers';
import { Auth, Storage } from 'aws-amplify';
import { User } from "../user";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public authState: AuthState;
  signedIn: boolean;
  user;
  greeting: string;
  currentUser;


  constructor(private amplifyService: AmplifyService) {

    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;
        } else {
          this.user = authState.user;
          this.greeting = "Hola " + this.user.username;
          this.currentUser = this.user.getSignInUserSession().getIdToken().getJwtToken();
          localStorage.setItem('currentUserToken', this.currentUser)
        }
      });


  }
  /* usernameAttributes = "email"; */
  /*   loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    }); */
  signUpConfig = {
    header: 'Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      {
        label: 'username',
        key: 'username',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'email',
        key: 'email',
        required: true,
        displayOrder: 2,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 3,
        type: 'password'
      },
    ]
  }
  signOut() {
    localStorage.clear();
    this.user = null;
    this.signedIn = false;
  }
}
