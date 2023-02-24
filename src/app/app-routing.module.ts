import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LoginComponent } from './connexion/login/login.component';
import { RegisterComponent } from './connexion/register/register.component';
import { ProfilComponent } from './profil/profil.component';
import { QuizzComponent } from './quizz/quizz.component';
import { CreateQuizzComponent } from './create/create.component';

const routes: Routes = [
  {
    path: 'quiz/create',
    component: CreateQuizzComponent,
  },
  {
    path: 'quiz/:id',
    component: QuizzComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
  },
  {
    path: 'profil/:id',
    component: ProfilComponent,
  },
  {
    path: 'connexion',
    component: ConnexionComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  // 404
  {
    path: '404',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },

  // {
  //   path: 'search/:id',
  //   component: RechercheComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
