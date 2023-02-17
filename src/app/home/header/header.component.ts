import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchTerm: string = "";
  searchResults: any;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.get<{results: any[]}>(`http://localhost:3000/recherche?term=${this.searchTerm}`)
      .subscribe((response) => {
        this.searchResults = response;
        console.log(response)
      });
    }
  opened = false;

  log(state:any) {
    console.log(state)
  }

  
}
