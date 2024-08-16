import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServerAuthData } from 'src/app/models/auth/auth';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router , private messageService: MessageService) {}

  public login(authData: ServerAuthData){
    debugger
    return this.http.post<any>(this.apiUrl, authData).toPromise()
      .then(response => {
        if (response.message === 'Login successful') {
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/links']);
        }
      })
      .catch(error => {
        this.messageService.add({ severity: 'error', summary: 'Kullanıcı adı veya şifre yanlış' });
      });
  }

   public logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
