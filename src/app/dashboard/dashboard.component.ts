import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {AccountsService} from '../shared/accounts.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;

  accounts: any[];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() { this._initAccounts(); }

  ngOnDestroy() { this._subscription.unsubscribe(); }

  private _initAccounts() {
    this._subscription = this.accountsService.getAccounts(1).subscribe(
        accounts => this.accounts = accounts);
  }
}
