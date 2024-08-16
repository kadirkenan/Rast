import { Component} from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AuthData } from 'src/app/models/auth/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public authData: AuthData = new AuthData();

  constructor(private authService: AuthService) {}

  public async onLogin() {
    try {
      await this.authService.login(this.authData);
    } catch (error) {
      console.error('Login failed', error);
    }
  }
}