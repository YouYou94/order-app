// 상수
// 디폴트 유저 정보
export const DEFAULTUSER = {
  address: {
    city: '서울특별시',
    state: '행복구',
    address_line: '행복로 1길 2-3',
    additional_address: '행복빌 201호',
  },
  phone_number: '010-3030-8080',

  payment_methods: [
    {
      id: '1km2gm3',
      vendor_name: '농협카드',
      card_number: '1968109202950192',
    },
    {
      id: '1gj29t1',
      vendor_name: '현대오일카드',
      card_number: '1959196220129591',
    },
  ],
  coupons: ['1jgj391j3ig', '996k3j2kd'],
  points: 10000,
};

// Request
export const DEFAULT = 'DEFAULT';
export const CUSTOM = 'CUSTOM';

export const REQUESTLIST = [
  {
    id: DEFAULT,
    value: DEFAULT,
    label: '요청사항을 선택 해주세요',
  },
  {
    id: 1,
    value: '벨은 누르지 말아주세요!',
    label: '벨은 누르지 말아주세요!',
  },
  {
    id: 2,
    value: '문 앞에 놓아 주시고 연락 주세요.',
    label: '문 앞에 놓아 주시고 연락 주세요.',
  },
  {
    id: 3,
    value: '반찬은 안 주셔도 되요.',
    label: '반찬은 안 주셔도 되요.',
  },
  {
    id: 'CUSTOM',
    value: 'CUSTOM',
    label: '직접 입력',
  },
];

// DISCOUNT
export const NONE = '미적용';
export const COUPON = '쿠폰';
export const POINT = '포인트';
export const RATED = 'rated';
export const FIXED = 'fixed';

// 장바구니
export const SHOPPINGBASKET = [
  {
    name: '허브향 닭다리살 구이와 매콤한 고르곤졸라 크림 곡물 리조또',
    count: 2,
    price: 20000,
  },
  {
    name: '탕수육',
    count: 99,
    price: 1000,
  },
  {
    name: '태백산 정기를 감싼 비비큐 황금올리브 닭가슴살',
    count: 1,
    price: 50000,
  },
];

export const RESULTPRICE = SHOPPINGBASKET => {
  let result = 0;
  for (let i = 0; i < SHOPPINGBASKET.length; i++)
    result += SHOPPINGBASKET[i].price * SHOPPINGBASKET[i].count;

  return result;
};
