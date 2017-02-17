import {Injectable} from '@angular/core';

@Injectable()
export class AccountsService {
  getAccounts(page: number) { return []; }

  getFilteredAccounts(page: number, search: string) { return []; }
}