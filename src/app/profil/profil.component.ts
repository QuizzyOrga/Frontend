import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent {
  profile: any;

  constructor() {}

  ngOnInit(): void {
    this.profile = '';
  }
}
