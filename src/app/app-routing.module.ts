import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'search/:id',
  //   component: RechercheComponent,
  // },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
