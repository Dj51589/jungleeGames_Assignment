import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { VoucherComponent } from './voucher/voucher.component';
import { VoucherService } from './voucher.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { OnlyNumber } from './onlynumber-directive';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    VoucherComponent,
    MessagesComponent,
    ConfirmationComponent,
    OnlyNumber
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    OrderModule
  ],
  providers: [
    VoucherService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
