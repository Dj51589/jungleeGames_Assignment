import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VoucherComponent }   from './voucher/voucher.component';
import { PaymentComponent }      from './payment/payment.component';
import { ConfirmationComponent }      from './confirmation/confirmation.component';

const routes: Routes = [
  { path: '', redirectTo: '/voucher', pathMatch: 'full' },
  { path: 'voucher', component: VoucherComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
