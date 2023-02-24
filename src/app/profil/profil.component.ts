import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent {
  user: any;
  idUser: number | undefined;
  subscription: Subscription | undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: any) => {
      if (params['id'] && Number(params['id'])) {
        this.idUser = Number(params['id']);
      } else {
        this.router.navigate(['/connexion']);
      }
    });
    this.userService.getUser(this.idUser).subscribe((res) => {
      this.user = res;
    });
  }
}
