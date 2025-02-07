# 포트폴리오 웹사이트

React와 Framer Motion을 활용한 개인 포트폴리오 웹사이트입니다.

## 주요 기능

-   반응형 디자인
-   스크롤 기반 애니메이션
-   포트폴리오 프로젝트 쇼케이스
-   소셜 미디어 링크
-   연락처 섹션

## 사용 기술

-   React
-   Framer Motion (애니메이션)
-   CSS Modules (스타일링)

## 애니메이션 특징

1. 스크롤 기반 섹션 등장

    - 각 섹션이 화면에 보일 때 아래에서 위로 등장
    - Framer Motion의 `whileInView` 기능 활용

2. 포트폴리오 아이템

    - 순차적 등장 애니메이션
    - 호버 효과 (확대)
    - 각 아이템별 지연 효과

3. 헤더 섹션
    - 페이드인과 슬라이드 효과 결합
    - 부드러운 등장 애니메이션

## 프로젝트 구조

```bash
src/
├── components/
│ ├── Header.jsx
│ ├── Nav.jsx
│ ├── About.jsx
│ ├── Experience.jsx
│ ├── Services.jsx
│ ├── Portfolio.jsx
│ ├── Testimonials.jsx
│ ├── Contact.jsx
│ └── Footer.jsx
├── App.jsx
```
