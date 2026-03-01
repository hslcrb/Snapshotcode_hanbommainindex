# 프로젝트 구조 (Project Structure)

이 문서는 한봄고등학교 홈페이지 스냅샷의 디렉토리 및 파일 구조에 대한 개요를 제공합니다.
This document provides an overview of the directory and file structure of the Hanbom High School website snapshot.

## 디렉토리 맵 (Directory Map)

- `README.md`: 프로젝트 랜딩 페이지 (Project landing page).
- `docs/`: 프로젝트 문서 및 분석 자료 (Project documentation and analysis).
    - `project_structure.md`: 본 문서 (This document).
    - `analysis_results.md`: 기술 분석 결과 (Technical analysis results).
- `hanbom-h.goesw.kr/`: 크롤링된 웹사이트 메인 디렉토리 (Main crawled website directory).
    - `hanbom-h/`: 메인 진입점 및 서브 모듈 (Main entry point and sub-modules).
        - `main.do`: 기본 홈페이지 파일 (정적 스냅샷) (Primary homepage file - static snapshot).
    - `00_common/`: 공유 에셋 (레이아웃 CSS, 공통 JS 등) (Shared assets - layout CSS, common JS, etc.).
    - `css/`: 웹 전용 CSS 파일 (Web-specific CSS files).
    - `js/`: 웹 전용 JavaScript 파일 (Web-specific JavaScript files).
    - `upload/`: 원본 사이트의 업로드 미디어 및 문서 (Uploaded media and documents from the original site).
    - `favicon.ico`: 웹사이트 파비콘 (Website favicon).
- `_DataURI/`: URI 형식으로 추출되거나 참조된 데이터 (Extracted or referenced data in URI format).
- `fonts.gstatic.com/`, `www.gstatic.com/`: 로컬 캐시된 Google Fonts 및 정적 에셋 (Locally cached Google Fonts and static assets).
- `translate.google.com/`, `translate.googleapis.com/`: 로컬 캐시된 Google 번역 관련 에셋 (Locally cached Google Translate related assets).
- `.git/`: Git 버전 관리 시스템 디렉토리 (Git version control system directory).

## 주요 파일 설명 (Key Files Description)

### [Main Page (메인 페이지)](../hanbom-h.goesw.kr/hanbom-h/main.do)
- **경로 (Path):** `hanbom-h.goesw.kr/hanbom-h/main.do`
- **설명 (Description):** 학교 홈페이지의 메인 입구입니다. 내비게이션 메뉴, 게시판 위젯, 메인 비주얼 배너를 포함합니다.
- The main entrance to the school website. Includes navigation menus, board widgets, and main visual banners.

### [Common Layout CSS (공통 레이아웃 CSS)](../hanbom-h.goesw.kr/00_common/css/layout.css)
- **경로 (Path):** `hanbom-h.goesw.kr/00_common/css/layout.css`
- **설명 (Description):** 웹사이트의 핵심 레이아웃 스타일 파일입니다.
- The core layout styles for the website.

### [Common JS (공통 JavaScript)](../hanbom-h.goesw.kr/00_common/js/common.js)
- **경로 (Path):** `hanbom-h.goesw.kr/00_common/js/common.js`
- **설명 (Description):** 사이트 전반에서 사용되는 공통 스크립트 로직입니다.
- Shared JavaScript logic used across the site.
