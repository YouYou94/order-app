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
│   │   └── DiscountMethod
│   │       ├── Coupon.jsx
│   │       └── Point
│   │           ├── Point.jsx
│   │           ├── PointUsing.jsx
│   │           └── PointUsingAll.jsx
│   ├── CouponMenu
│   │   ├── styled.jsx
│   │   ├── CouponMenu.jsx
│   │   └── CouponTypeCheck
│   │       └── CouponTypeCheck.jsx
│   ├── OrderHistory
│   │   ├── styled.jsx
│   │   ├── OrderHistory.jsx
│   │   └── DiscountHistory
│   │       └── DiscountHistory.jsx
│   ├── styled.jsx
│   └── PayOrder.jsx
├── Pages
│   ├── styled.jsx
│   ├── AppRouter.jsx
│   ├── MainPage.jsx
│   └── OrderPage.jsx
├── assets
│   ├── next.png
│   └── prev.png
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
- 새로고침 시 State의 undefined 트러블 슈팅

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
- OrderHistory, 배달 주문 내역 styled-components 구현

### 22.10.04

- 결제하기 버튼 생성
- 쿠폰 메뉴 브랜치 생성 및 styled-components 구현
- 쿠폰 선택 기능 구현
- 쿠폰 사용 기능 구현
- 할인 내역 쿠폰 추가

### 22.10.05

- 포인트 사용 기능 구현
- 할인 내역 포인트 추가
- 쿠폰 및 포인트 브랜치 코드 PayOrder와 병합

### 22.10.06

- 캐러셀 슬라이드 구현
- 배달 주문 내역 Branch Merge
- 결제 하기 Branch Merge
- 쿠폰 Branch Merge
- 포인트 Branch Merge
- 캐러셀 슬라이드 Branch Merge

### 22.10.07

- 코드 정리
- 유효성 검사

### 22.10.11

- 쿠폰 컴포넌트 유효성 검사
- 포인트 컴포넌트 유효성 검사
- 직접 입력 최근 3개 저장 기능 구현
- 결제 버튼 클릭 시 alert 기능 구현
- 결제 완료 시 메인페이지로 이동

### 22.10.12

- 금액 관련 문자 3자리마다 반점
- 포인트 유효성 검사
