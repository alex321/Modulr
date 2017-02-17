import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AccountsService {
  constructor(private http: Http) {}

  getAccounts(page: number) {
    return this.http.get('./mock-data/results.json')
        .map(resp => resp.json().content)
        .delay(2000);
  }

  getFilteredAccounts(page: number, search: string) {
    return this.http.get('./mock-data/results.json')
        .map(resp => resp.json().content.filter(account => {
          return account.name.toLowerCase().includes(search.toLowerCase()) ||
              account.id.toLowerCase().includes(search.toLowerCase());
        }))
        .delay(2000);
  }
}
