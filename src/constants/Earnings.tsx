import frame1 from '../assets/icons/frame1.png';
import frame2 from '../assets/icons/frame2.png';
import frame3 from '../assets/icons/frame3.png';
import visa from '../assets/icons/visa.png';
import master from '../assets/icons/mastercard.png';
import paypal from '../assets/icons/paypal.png';
import mtn from '../assets/icons/mtn.png';
import orange from '../assets/icons/orange.png';

const earnings = [
   {
      img: frame1,
      amount: '$16, 593.00',
      type: 'Current Balance',
   },
   {
      img: frame2,
      amount: '$13, 593.00',
      type: 'Total Withdrawals',
   },
   {
      img: frame3,
      amount: '$16, 593.00',
      type: 'Today Revenue',
   },
];
const tableData = [
   {
      date: '21 Sep, 2021 at 2:14 AM',
      method: 'Mastercards',
      amount: '$500',
      status: 'Pending',
   },
   {
      date: '21 Sep, 2021 at 2:14 AM',
      method: 'Visa',
      amount: '$250',
      status: 'Completed',
   },
   {
      date: '21 Sep, 2021 at 2:14 AM',
      method: 'Orange Money',
      amount: '$120',
      status: 'Canceled',
   },
];

const payemntMethod = [
   {
      paymentMeth: visa,
      number: '4855 **** **** ****',
      date: '04/24',
      name: 'Vako Ahmir',
   },
   {
      paymentMeth: visa,
      number: '4855 **** **** ****',
      date: '04/24',
      name: 'Vako Ahmir',
   },
   {
      paymentMeth: master,
      number: '4855 **** **** ****',
      date: '04/24',
      name: 'Vako Ahmir',
   },
   {
      paymentMeth: paypal,
      number: '4855 **** **** ****',
      date: '04/24',
      name: 'Vako Ahmir',
   },
   {
      paymentMeth: mtn,
      number: '4855 **** **** ****',
      date: '04/24',
      name: 'Vako Ahmir',
   },
   {
      paymentMeth: orange,
      number: '4855 **** **** ****',
      date: '04/24',
      name: 'Vako Ahmir',
   },
];
export { earnings, tableData, payemntMethod };
