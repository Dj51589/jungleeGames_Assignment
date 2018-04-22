import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voucher, CardDetail, BankDetail } from '../voucher';
import { VoucherService } from '../voucher.service';
import { MessageService } from '../message.service';

declare var $ :any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  selectedVoucher: Voucher;
  paymode: string;
  NB:string = 'nb';
  DC:string = 'dc';
  CC:string = 'cc';
  selectedBank: string;

  debitCard: CardDetail = {
    cardNumber: null,
    expDate: null,
    expYear: null,
    cvvNumber: null
  };
  creditCard: CardDetail = {
    cardNumber: null,
    expDate: null,
    expYear: null,
    cvvNumber: null
  };
  bankingDetail: BankDetail = {
    customerID: null,
    routingID: null
  }

  constructor(private router: Router,
    private voucherService: VoucherService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.paymode = this.NB;
    this.messageService.clear();
    this.selectedVoucher = this.voucherService.getVoucher();
    if (this.selectedVoucher) {
      localStorage.setItem("selectedVoucher", JSON.stringify(this.selectedVoucher));
    }
    else {
      this.selectedVoucher = JSON.parse(localStorage.getItem("selectedVoucher"));
    }
    this.messageService.clear();
    if(!this.selectedVoucher) {
      this.router.navigateByUrl('/');
    }
  }

  changePaymode(evt, paymode: string): void {
    this.paymode = paymode;
    this.resetFields();
    this.clearError();
  }

  selectBank(bankName: string) {
    this.selectedBank = bankName;
    this.clearError();
  }

  resetFields(): void {
    this.creditCard = {
      cardNumber: null,
      expDate: 0,
      expYear: 0,
      cvvNumber: null
    }

    this.debitCard = {
      cardNumber: null,
      expDate: 0,
      expYear: 0,
      cvvNumber: null
    }

    this.bankingDetail = {
      customerID: null,
      routingID: null
    }

    this.selectedBank = null;
  }

  goToVoucher(): void {
    this.router.navigateByUrl('/voucher');
  }

  validateCard(): boolean {
    var obj = this.paymode  === this.CC ? this.creditCard : this.debitCard;
    if (!obj.cardNumber) {
      this.messageService.add('Enter Card Number.', 'danger');
      return false;
    }
    if (!obj.expDate) {
      this.messageService.add('Enter Exp Date.', 'danger');
      return false;
    }
    if (!obj.expYear) {
      this.messageService.add('Enter Exp Year.', 'danger');
      return false;
    }
    if (!obj.cvvNumber) {
      this.messageService.add('Enter CVV Number.', 'danger');
      return false;
    }
    this.goToConfirmationPage();
  }

  validateNetBanking(): boolean {
    if (this.selectedBank) {
      if (!this.bankingDetail.customerID) {
        this.messageService.add('Enter CustomerID.', 'danger');
        return false;
      }
      if (!this.bankingDetail.routingID) {
        this.messageService.add('Enter RoutingID.', 'danger');
        return false;
      }
    }
    else {
      this.messageService.add('Please Select Bank.', 'info');
      return false
    }
    this.goToConfirmationPage();
  }

  goToConfirmationPage(): void {
    this.router.navigateByUrl('/confirmation');
  }

  paynow(): void {
    switch (this.paymode) {
      case this.NB:
        this.validateNetBanking();
        break;
      case this.DC:
      case this.CC:
        this.validateCard();
        break;
    }
  }

  clearError(): void {
    this.messageService.clear();
  }
}
