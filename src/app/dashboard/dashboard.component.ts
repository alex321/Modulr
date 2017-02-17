import {Component} from '@angular/core';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  data = [
    {
      'id': 'A0201C2N',
      'name': '0e2a7d1c-033c-4622-920f-5bda21825682',
      'balance': '74.44',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '00001531', 'sortCode': '000000'}],
      'customerId': 'C02013ZU',
      'externalReference': 'GOJI-0017111'
    },
    {
      'id': 'A02017NU',
      'name': '1010 SOFTWARE LTD',
      'balance': '46.91',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '00001232', 'sortCode': '000000'}],
      'customerId': 'C0200098',
      'externalReference': 'Account 1'
    },
    {
      'id': 'A02001WF',
      'name': '1010 SOFTWARE LTD',
      'balance': '0.04',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '48916325', 'sortCode': '068759'}],
      'customerId': 'C0200098',
      'externalReference': 'Pizza Money 2'
    },
    {
      'id': 'A020000P',
      'name': '123456789 LIMITED',
      'balance': '0.00',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '16317560', 'sortCode': '068759'}],
      'customerId': 'C020005K',
      'externalReference': 'ujhygf'
    },
    {
      'id': 'A0200012',
      'name': '1989',
      'balance': '0.00',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '44358410', 'sortCode': '068759'}],
      'customerId': 'C020003T',
      'externalReference': 'The clear dont work 1'
    },
    {
      'id': 'A02001W0',
      'name': '1sd',
      'balance': '0.00',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '92450371', 'sortCode': '068759'}],
      'customerId': 'C020009D'
    },
    {
      'id': 'A0201C41',
      'name': '35204131-8f31-4fc7-9ba8-d51ea57c1887',
      'balance': '0.00',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '00001577', 'sortCode': '000000'}],
      'customerId': 'C0201417',
      'externalReference': 'GOJI-001'
    },
    {
      'id': 'A02017NV',
      'name': '3bed1e1f-a00b-4a4c-83c1-e81eb40c5477',
      'balance': '0.00',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '00001233', 'sortCode': '000000'}],
      'customerId': 'C02010AV',
      'externalReference': 'GOJI-001'
    },
    {
      'id': 'A02019R9',
      'name': '58b7802c-db96-49f7-ad93-7ec0b2ea0881',
      'balance': '0.00',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '00001300', 'sortCode': '000000'}],
      'customerId': 'C0201212',
      'externalReference': 'GOJI-001'
    },
    {
      'id': 'A020000U',
      'name': '8202711021',
      'balance': '0.00',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '26207260', 'sortCode': '068759'}],
      'customerId': 'C0200079'
    },
    {
      'id': 'A02017NW',
      'name': '850192fc-579e-493c-8940-4e2fb4377c9e',
      'balance': '2977.99',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '00001234', 'sortCode': '000000'}],
      'customerId': 'C02010AW',
      'externalReference': 'GOJI-001'
    },
    {
      'id': 'A0201C3R',
      'name': '9c96416e-ca24-47c1-a50a-1d42c6beadbc',
      'balance': '0.00',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '00001567', 'sortCode': '000000'}],
      'customerId': 'C020140X',
      'externalReference': 'GOJI-001'
    },
    {
      'id': 'A0201C48',
      'name': '9cdb96eb-c679-45cf-b64a-791daf394302',
      'balance': '0.00',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '00001584', 'sortCode': '000000'}],
      'customerId': 'C020141E',
      'externalReference': 'GOJI-001'
    },
    {
      'id': 'A02029KY',
      'name': '-A-',
      'balance': '0.00',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '01832132', 'sortCode': '236972'}],
      'customerId': 'C0201X7E'
    },
    {
      'id': 'A02029VF',
      'name': '.A.',
      'balance': '0.00',
      'currency': 'GBP',
      'status': 'ACTIVE',
      'identifiers':
          [{'type': 'SCAN', 'accountNumber': '01832199', 'sortCode': '236972'}],
      'customerId': 'C0201XEX'
    }
  ];
}
