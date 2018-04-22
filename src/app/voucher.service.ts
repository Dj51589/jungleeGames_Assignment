import { Injectable } from '@angular/core';
import { Voucher } from './voucher'

@Injectable()
export class VoucherService {
  voucher: Voucher;
  constructor() { }

  selectVoucher(voucher: Voucher) {
    this.voucher = voucher;
  }

  getVoucher(): Voucher {
    return this.voucher;
  }

  clearVoucher(): void {
    this.voucher = null;
  }

}
