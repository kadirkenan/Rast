import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService : AuthService) { }
  public visitedHole$ = new BehaviorSubject<boolean>(true)

  lottieOptions: any;

  ngOnInit() {
    this.lottieOptions = {
      path: 'assets/exit.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
    };
  }

 public async logout(){
  await this.authService.logout();
 }

 public visited() {
  this.visitedHole$.next(!this.visitedHole$.getValue());
}
}
