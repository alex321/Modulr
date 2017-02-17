import {NgModule} from '@angular/core';

import {AccountsService} from './accounts.service';
import {SortCodePipe} from './sort-code.pipe';


@NgModule({
  declarations: [SortCodePipe],
  providers: [AccountsService],
  exports: [SortCodePipe]
})
export class SharedModule {
}
