import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-animation',
  templateUrl: './login-animation.component.html',
  styleUrls: ['./login-animation.component.scss']
})
export class LoginAnimationComponent implements OnInit {
  loginAnimation: any;

    constructor() { }
  
  
    ngOnInit() {
      this.loginAnimation = {
        path: 'assets/login.json',
        renderer: 'svg',
        loop: false,
        autoplay: true
      };
    }

}
