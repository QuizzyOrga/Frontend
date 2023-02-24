import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchTerm: string = '';
  searchResults: any;
  @Input() hideSearchBar: boolean = false;
  constructor(private http: HttpClient, private dataService: DataService) {}

  opened = false;

  log(state: any) {
    console.log(state);
  }

  search() {
    if (this.searchTerm === '') {
      this.searchResults = null;
      this.dataService.setData('');
    } else {
      this.http
        .get<{ results: any[] }>(
          `http://localhost:3000/recherche?term=${this.searchTerm}`
        )
        .subscribe((response) => {
          this.searchResults = response;
          this.dataService.setData(this.searchResults);
        });
    }
  }
}
