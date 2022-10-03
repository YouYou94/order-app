# 주문 페이지 앱

- 흔히 사용하는 배달 어플의 주문 페이지를 웹으로 구현

## 링크

- [LINK](https://youyou94.github.io/order-app/)

## 컴포넌트 폴더 구조

```bash
src
├── Component
│   ├── Orderer
│   │   ├── styled.jsx
│   │   ├── Orderer.jsx
│   │   ├── Info
│   │   │   ├── Address.jsx
│   │   │   └── PhoneNum.jsx
│   │   └── Request
│   │       ├── Request.jsx
│   │       └── CustomRequest.jsx
│   ├── PaymentMethod
│   │   ├── styled.jsx
│   │   └── PaymentMethod.jsx
│   ├── Discount
│   │   ├── styled.jsx
│   │   ├── Discount.jsx
│   │   ├── DiscountMethod
│   │       ├── Coupon.jsx
│   │       └── Point.jsx
│   ├── OrderHistory
│   │   ├── styled.jsx
│   │   └─ OrderHistory.jsx
│   ├── styled.jsx
│   └── Order.jsx
├── Pages
│   ├── styled.jsx
│   ├── AppRouter.jsx
│   ├── MainPage.jsx
│   └── OrderPage.jsx
├── App.js
├── App.css
├── Constants.js
└── index.js
```

## 진행 상황

### 22.09.28

- 피드백 반영하여 재구현 (ver 1.0)
- 패키지 다운로드 및 페이지 구현
- 컴포넌트 폴더 구조 0.1

### 22.09.29

- 주문자 브랜치 생성
- Orderer, 주문자 정보 섹션 구현

### 22.09.30

- 주문 요청 사항 브랜치 생성
- Request, 주문 요청 사항 섹션 구현
- 결제 수단 선택 브랜치 생성
- Payment, 결제 수단 선택 섹션 구현
- 캐러셀 슬라이드 구현 중...
- 할인 수단 선택 브랜치 생성
- Discount, 할인 수단 선택 레이아웃 구현

### 22.10.03

- Discount, DiscountMethod, 쿠폰 및 포인트 섹션 styled-components 구현
- 1차 merge 및 브랜치 정리
