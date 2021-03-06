import bank from '../assets/images/bankIcon.png';
import invoice from '../assets/images/invoice.png';
import transfer from '../assets/images/transfer.png';
import support from '../assets/images/support.png';
import greenCard from '../assets/images/green-card.svg';
import purpleCard from '../assets/images/purple-card.svg';
import bankFees from '../assets/images/bank-fees.svg';
import internet from '../assets/images/internet.svg';
import marketing from '../assets/images/marketing.svg';
import transferSvg from '../assets/images/transfer.svg';
import grayTranfer from '../assets/images/transfer-gray.svg';
import receive from '../assets/images/receive.svg';

export const sideBarData = [
  {
    name: 'account',
    icon: bank,
  },
  {
    name: 'Transfer',
    icon: transfer,
  },
  {
    name: 'invoice',
    icon: invoice,
  },
  {
    name: 'Management',
    icon: support,
  },
  {
    name: 'security',
    icon: support,
  },
  {
    name: 'support',
    icon: support,
  },
];

export const AccountDetails = [
  {
    type: 'CURRENT ACCOUNT',
    details: 'PROVIDUS BANK - 9906533917',
    icon: purpleCard,
    amount: 'N814,800',
    kobo: '.45',
  },
  {
    type: 'SAVINGS ACCOUNT',
    details: 'SUB ACCOUNT - 12346789',
    icon: greenCard,
    amount: 'N39,342',
    kobo: '.45',
  },
];

export const SummaryData = [
  {
    headers: [
      {
        title: 'Money in',
        price: 'N 5,650,000',
      },
      {
        title: 'Money out',
        price: 'N 5,650,000',
      },
      {
        title: 'Difference',
        price: 'N 5,650,000',
      },
    ],

    xData: ['20k', '15k', '10k', '5k', '0'],

    yData: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug'],
  },
];

export const OutflowData = [
  {
    title: 'Bank Fees',
    price: '- N 250,000',
    icon: bankFees,
    percentage: 92,
  },
  {
    title: 'Internet',
    price: '- N 250,000',
    icon: internet,
    percentage: 67,
  },
  {
    title: 'Marketing',
    price: '- N 250,000',
    icon: marketing,
    percentage: 38,
  },
  {
    title: 'Transfer',
    price: '- N 250,000',
    icon: transferSvg,
    percentage: 21,
  },
];

export const RecentTransaction = [
  {
    title: 'Transfer Fee',
    time: '12:49 AM',
    price: '-N145.90',
    icon: grayTranfer,
  },
  {
    title: 'Adam Chapman',
    time: '12:49 AM',
    price: '-N2,000.00',
    icon: receive,
  },
  {
    title: 'Shirley Barnes',
    time: '12:49 AM',
    price: '-N2,000.00',
    icon: receive,
  },
  {
    title: 'Shirley Barnes',
    time: '12:49 AM',
    price: '-N2,000.00',
    icon: receive,
  },
];

export const Dropdown = [
  'Clayvant Inc',
  'Business name 2',
  'Business name 3',
  'Add a business',
];
