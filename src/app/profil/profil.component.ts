import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent {
  user: any;
  idUser: number = 1;
  subscription: Subscription | undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.idUser = Number(params['id']) || 1;
    });
    this.userService.getUser(this.idUser).subscribe((res) => {
      this.user = res;
    });
  }
}
