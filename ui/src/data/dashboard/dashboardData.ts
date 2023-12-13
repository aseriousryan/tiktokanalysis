import type { recentTrans, productPerformanceType, productsCards } from '@/types/dashboard/index';

/*--Recent Transaction--*/
const recentTransaction: recentTrans[] = [
    {
        title: '09:30 am',
        subtitle: 'Payment received from John Doe of $385.90',
        textcolor: 'primary',
        boldtext: false,
        line: true,
        link: '',
        url: ''
    },
    {
        title: '10:00 am',
        subtitle: 'New sale recorded',
        textcolor: 'secondary',
        boldtext: true,
        line: true,
        link: '#ML-3467',
        url: ''
    },
    {
        title: '12:00 am',
        subtitle: 'Payment was made of $64.95 to Michael',
        textcolor: 'success',
        boldtext: false,
        line: true,
        link: '',
        url: ''
    },
    {
        title: '09:30 am',
        subtitle: 'New sale recorded',
        textcolor: 'warning',
        boldtext: true,
        line: true,
        link: '#ML-3467',
        url: ''
    },
    {
        title: '09:30 am',
        subtitle: 'New arrival recorded',
        textcolor: 'error',
        boldtext: true,
        line: true,
        link: '',
        url: ''
    },
    {
        title: '12:00 am',
        subtitle: 'Payment Received',
        textcolor: 'success',
        boldtext: false,
        line: false,
        link: '',
        url: ''
    },
]

/*Basic Table 1*/
const productPerformance: productPerformanceType[] = [
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7014423548387216667',
      likes: '8523',
      comment: '166',
      bookmark: '167',
      share: '21'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7007414317393923354',
      likes: '1613',
      comment: '141',
      bookmark: '21',
      share: '36'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7005883324078050587',
      likes: '3208',
      comment: '205',
      bookmark: '26',
      share: '80'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7301957649724132615',
      likes: '7',
      comment: '2',
      bookmark: '1',
      share: '1'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7301636745727069447',
      likes: '6',
      comment: '2',
      bookmark: '1',
      share: '1'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7285307701767179527',
      likes: '52',
      comment: '14',
      bookmark: '4',
      share: '7'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7281596769258065159',
      likes: '41',
      comment: '17',
      bookmark: '4',
      share: '3'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7278626014253698311',
      likes: '49',
      comment: '19',
      bookmark: '4',
      share: '2'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7274922494962797842',
      likes: '53',
      comment: '23',
      bookmark: '7',
      share: '10'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7269658432779717895',
      likes: '32',
      comment: '7',
      bookmark: '3',
      share: '1'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7268599983140572417',
      likes: '30',
      comment: '0',
      bookmark: '4',
      share: 'Share'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7267487340979899649',
      likes: '36',
      comment: '5',
      bookmark: '6',
      share: '4'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7261827003949550850',
      likes: '36',
      comment: '4',
      bookmark: '3',
      share: '1'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7257808646204116242',
      likes: '31',
      comment: '5',
      bookmark: '0',
      share: '1'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7253045440277400833',
      likes: '49',
      comment: '12',
      bookmark: '1',
      share: '2'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7248863861061864722',
      likes: '59',
      comment: '11',
      bookmark: '3',
      share: '2'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7244846348204379393',
      likes: '52',
      comment: '17',
      bookmark: '3',
      share: '6'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7243640039962381569',
      likes: '42',
      comment: '13',
      bookmark: '7',
      share: '3'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7243438725143776513',
      likes: '9',
      comment: '3',
      bookmark: '0',
      share: 'Share'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7241433827783052546',
      likes: '33',
      comment: '14',
      bookmark: '1',
      share: '4'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7240049936845245698',
      likes: '43',
      comment: '10',
      bookmark: '2',
      share: '2'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7195207360888016154',
      likes: '13',
      comment: '0',
      bookmark: '0',
      share: 'Share'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7176643066852461850',
      likes: '69',
      comment: '30',
      bookmark: '5',
      share: '6'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7173307557874912539',
      likes: '43',
      comment: '14',
      bookmark: '6',
      share: '5'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7168999998313516314',
      likes: '33',
      comment: '1',
      bookmark: '3',
      share: '3'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7168834016559353115',
      likes: '8',
      comment: '2',
      bookmark: '0',
      share: 'Share'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7167978543131954459',
      likes: '23',
      comment: '3',
      bookmark: '1',
      share: '3'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7160693826548436251',
      likes: '76',
      comment: '10',
      bookmark: '0',
      share: '7'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7157871782903483674',
      likes: '7',
      comment: '1',
      bookmark: '0',
      share: 'Share'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7084777742008454427',
      likes: '51',
      comment: '9',
      bookmark: '4',
      share: '4'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7079173805075139866',
      likes: '19',
      comment: '1',
      bookmark: '0',
      share: 'Share'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7070537914739952922',
      likes: '66',
      comment: '6',
      bookmark: '0',
      share: 'Share'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7063119125966523675',
      likes: '13',
      comment: '3',
      bookmark: '0',
      share: '2'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7042086099157617947',
      likes: '90',
      comment: '17',
      bookmark: '0',
      share: '4'
    },
    {
      url: 'https://www.tiktok.com/@drbotak.goh/video/7030040165334797595',
      likes: '76',
      comment: '29',
      bookmark: '0',
      share: '12'
    }
  ];

  const productPerformance2: productPerformanceType[] = [
    {
      url: 'https://www.tiktok.com/@owizzlee/video/7311645490699898119',
      likes: '1271',
      comment: '24',
      bookmark: '104',
      share: '4'
    },
    {
      url: 'https://www.tiktok.com/@owizzlee/video/7311330582682701074',
      likes: '3056',
      comment: '31',
      bookmark: '197',
      share: '4'
    },
    {
      url: 'https://www.tiktok.com/@owizzlee/video/7310934822392827154',
      likes: '14.6M',
      comment: '78.5K',
      bookmark: '1.3M',
      share: '184.5K'
    }
  ];

/*--Products Cards--*/
import proimg1 from '@/assets/images/products/s4.jpg';
import proimg2 from '@/assets/images/products/s5.jpg';
import proimg3 from '@/assets/images/products/s7.jpg';
import proimg4 from '@/assets/images/products/s11.jpg';
import dr1 from '@/assets/images/products/dr1.jpeg';
import dr2 from '@/assets/images/products/dr2.jpeg';
import dr3 from '@/assets/images/products/dr3.jpeg';
import dr4 from '@/assets/images/products/dr4.jpeg';
const productsCard: productsCards[] = [
    {
        title: 'Boat Headphone',
        link: '/',
        photo: dr1,
        salesPrice: 196300,
        price: '196.3k',
        rating: 4
    },
    {
        title: 'MacBook Air Pro',
        link: '/',
        photo: dr2,
        salesPrice: 104700,
        price: '104.7k',
        rating: 5
    },
    {
        title: 'Red Valvet Dress',
        link: '/',
        photo: dr3,
        salesPrice: 113300,
        price: '113.3k',
        rating: 3
    },
    {
        title: 'Cute Soft Teddybear',
        link: '/',
        photo: dr4,
        salesPrice: 1268,
        price: '1268',
        rating: 2
    }
];

const productsCard2: productsCards[] = [
    {
        title: 'Boat Headphone',
        link: '/',
        photo: dr1,
        salesPrice: 196300,
        price: '196.3k',
        rating: 4
    },
    {
        title: 'MacBook Air Pro',
        link: '/',
        photo: dr2,
        salesPrice: 104700,
        price: '104.7k',
        rating: 5
    },
    {
        title: 'Red Valvet Dress',
        link: '/',
        photo: dr3,
        salesPrice: 113300,
        price: '113.3k',
        rating: 3
    },
    {
        title: 'Cute Soft Teddybear',
        link: '/',
        photo: dr4,
        salesPrice: 1268,
        price: '1268',
        rating: 2
    }
];


export { recentTransaction, productPerformance, productsCard }