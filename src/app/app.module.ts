import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { QuizzComponent } from './quizz/quizz.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { RechercheComponent } from './recherche/recherche.component';
import { CardComponent } from './home/card/card.component';
import { ErrorComponent } from './error/error.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConnexionComponent } from './connexion/connexion.component';
import { LoginComponent } from './connexion/login/login.component';
import { RegisterComponent } from './connexion/register/register.component';

import { ChangeBgDirective } from './change-bg.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgFireworksModule } from '@fireworks-js/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    QuizzComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    RechercheComponent,
    CardComponent,
    ErrorComponent,
    ConnexionComponent,
    LoginComponent,
    RegisterComponent,
    ChangeBgDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    NgFireworksModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
