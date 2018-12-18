import { Component, OnInit } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../auth.config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpClient, private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);   
    
    this.oauthService.tryLogin().then(() => {console.log() } );
    let url = "https://www.googleapis.com/gmail/v1/users/rak.krzysztof.7%40gmail.com/messages?access_token=" + this.oauthService.getAccessToken();
    console.log(url);
    this.http.get(url).subscribe(data => { console.log(data)});
  }

  ngOnInit() {
  }

}
