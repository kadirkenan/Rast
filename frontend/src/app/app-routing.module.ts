import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/organisms/login-form/login.component';
import { AuthGuard } from './components/guard/auth.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'links', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
