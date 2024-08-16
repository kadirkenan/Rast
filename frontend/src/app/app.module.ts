import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {TagModule} from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { ImageComponent } from './components/atoms/filter-button/filter-buttoncomponent';
import { SocialButtonsComponent } from './components/molecules/social-buttons/social-buttons.component';
import { SearchBarComponent } from './components/molecules/search-bar/search-bar.component';
import { VisitedLinkComponent } from './components/molecules/visited-link/visited-link.component';
import { LoginAnimationComponent } from './components/molecules/login-animation/login-animationcomponent';
import { NavbarComponent } from './components/organisms/navbar/navbar.component';
import { TableComponent } from './components/organisms/table/table.component';
import { MainTemplateComponent } from './components/template/main-template/main-template.component';
import { LoginComponent } from './components/organisms/login-form/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthGuard } from './components/guard/auth.guard';
import { UppercasePipe } from './components/pipes/uppercase/uppercase.pipe';
import { LinkValidationDirective } from './components/directives/link-validation.directive';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SearchPipe } from './components/pipes/search/search.pipe';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    ImageComponent,
    SocialButtonsComponent,
    SearchBarComponent,
    VisitedLinkComponent,
    LoginAnimationComponent,
    NavbarComponent,
    TableComponent,
    MainTemplateComponent,
    LoginComponent,
    HomeComponent,
    UppercasePipe,
    LinkValidationDirective,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    TagModule,
    RippleModule,
    BrowserAnimationsModule,
    DialogModule,
    InputTextModule,
    PaginatorModule,
    ToastModule,
    OverlayPanelModule,
    LottieModule.forRoot({ player: playerFactory }),

  ],
  providers: [AuthGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
