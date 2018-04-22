import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voucher } from '../voucher'
import { VoucherList } from '../mock-vouchers'
import { VoucherService } from '../voucher.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {
  selectedOffer: string = null;
  showPromoBox: boolean = false;
  selectedVoucher: Voucher;
  inputVoucher: Voucher;
  promoOffers: string[];
  vouchers: Voucher[];
  order: string = 'orderSequence';

  constructor(private router: Router,
    private voucherService: VoucherService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.inputVoucher = {
      bonusPrice: null,
      customPrice: null,
      orderSequence: null
    }
    this.vouchers = VoucherList;
    this.promoOffers = ['Promo 10', 'Promo 20' , 'Promo 30', 'Promo 40'];
    this.selectedVoucher = this.voucherService.getVoucher() || VoucherList[2];
    if (!this.selectedVoucher.orderSequence) {
      this.inputVoucher = this.selectedVoucher;
    }
    if (this.selectedVoucher) {
      this.voucherService.selectVoucher(this.selectedVoucher);
    }
  }

  showPromo(): void {
    this.showPromoBox = true;
  }

  selectOffer(offer: string): void {
    this.selectedOffer = offer;
  }

  selectVoucer(voucher: Voucher): void {
      this.messageService.clear();
      this.selectedVoucher = voucher;
      if (this.selectedVoucher !== this.inputVoucher) {
        this.inputVoucher = {
          bonusPrice: null,
          customPrice: null,
          orderSequence: null
        }
      }

      this.voucherService.selectVoucher(voucher);
  }

  goPayment(): void {
    this.router.navigateByUrl('/payment');
  }
}
