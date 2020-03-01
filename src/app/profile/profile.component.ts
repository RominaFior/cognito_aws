import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId: string;
  userName: string;
  user: any;
  data: any;
  error: any;
  config
  /*  let data = data(){ return info: ''} */
  constructor(private api: APIService, private http: HttpClient) { }
  ngOnInit() {
    if (localStorage.getItem('currentUserToken')) {
      const jwt = localStorage.getItem('currentUserToken')
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': jwt
        })
      };

      this.http.get('https://nlxhp3fjli.execute-api.eu-west-1.amazonaws.com/v1/m', httpOptions)
        .subscribe(data => this.data = data,
          error => this.error = error
        )
    }

  }



}
