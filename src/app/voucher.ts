export class Voucher {
  bonusPrice: number;
  customPrice: number;
  orderSequence: number;
}

export class CardDetail {
  cardNumber: number;
  expDate: number;
  expYear: number;
  cvvNumber: number;
}

export class BankDetail {
  customerID: number;
  routingID: string;
}
