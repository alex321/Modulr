import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AccountsService {
  constructor(private http: Http) {}

  getAccounts(page: number) {
    return this.http.get('./mock-data/results.json')
        .map(resp => resp.json().content);
  }

  getFilteredAccounts(page: number, search: string) { return []; }
}
