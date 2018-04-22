import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoucherService } from '../voucher.service';
import { Voucher } from '../voucher';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  selectedVoucher: Voucher;
  constructor(private router: Router, private voucherService: VoucherService) { }

  ngOnInit() {
    this.selectedVoucher = this.voucherService.getVoucher();
    if (this.selectedVoucher) {
      localStorage.setItem("selectedVoucher", JSON.stringify(this.selectedVoucher));
    }
    else {
      this.selectedVoucher = JSON.parse(localStorage.getItem("selectedVoucher"));
    }
    if(!this.selectedVoucher) {
      this.router.navigateByUrl('/');
    }
  }

  addMoreCash() {
    localStorage.removeItem('selectedVoucher');
    this.voucherService.clearVoucher();
    this.router.navigateByUrl('/');
  }
}
