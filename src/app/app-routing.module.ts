import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './profil/login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { QuizzComponent } from './quizz/quizz.component';

const routes: Routes = [
  {
    path: 'quiz/:id',
    component: QuizzComponent,
  },
  {
    path: 'profil/:id',
    component: ProfilComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
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
    path: '**',
    component: ErrorComponent,
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
