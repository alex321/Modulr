

import 'rxjs/add/operator/switch';

import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';

import {AccountsService} from '../shared/accounts.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private searchSubject = new Subject<string>();

  accounts: Observable<any[]>;
  isLoading: boolean = true;

  constructor(private accountsService: AccountsService) {}

  onSearchClick(search: string) { this.searchSubject.next(search); }

  ngOnInit() { this._initAccounts(); }

  private _initAccounts() {
    let searchResultsStream =
        this.searchSubject.do(() => { this.isLoading = true; })
            .switchMap(search => {
              return this.accountsService.getFilteredAccounts(1, search);
            });

    let initialAccounts =
        this.accountsService.getAccounts(1).do(() => this.isLoading = true);

    this.accounts =
        Observable.concat(initialAccounts, searchResultsStream).do(() => {
          console.log('HIT');
          this.isLoading = false;
        });
  }
}
