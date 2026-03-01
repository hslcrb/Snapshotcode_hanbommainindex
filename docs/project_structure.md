# 프로젝트 구조 (Project Structure)

이 문서는 정비된 한봄고등학교 홈페이지 스냅샷의 물리적 구조를 설명합니다.
This document describes the physical structure of the reorganized Hanbom High School website snapshot.

## 디렉토리 맵 (Directory Map)

### 1. 웹사이트 아카이브 (Website Archive) - `website_archive/`
- `pages/`: 홈페이지 메인 진입점 (`main.do`) 및 주요 페이지들이 포함되어 있습니다.
  - Contains the primary home page (`main.do`) and other major pages.
- `assets_common/`: 모든 페이지에서 공통으로 사용하는 레이아웃 CSS, 공통 JS, 웹 폰트 등이 포함됩니다.
  - Includes common layout CSS, JavaScript, and web fonts used throughout the site.
- `assets_web/`: 웹 디자인 전용 CSS, JS, 이미지 에셋들이 정리되어 있습니다.
  - Organized CSS, JS, and image assets specific to the web design.
- `uploads/`: 학교 소식 및 게시판에 업로드된 실제 이미지와 문서 파일들이 저장됩니다.
  - Stores actual images and documents uploaded to boards and news sections.

### 2. 외부 및 내부 에셋 (External & Internal Assets)
- `external_assets/`: Google Fonts, Google Translate 등 사이트 구동에 필요한 외부 서비스 리소스들의 로컬 캐시입니다.
  - Local caches of external resources like Google Fonts and Translate.
- `internal_assets/`: 데이터 URI 등 사이트 내부에서 참조하는 데이터 에셋입니다.
  - Internal data assets such as data URIs.

### 3. 기타 (Miscellaneous)
- `docs/`: 프로젝트 분석 및 구조에 대한 상세 문서입니다.
  - Detailed documentation for project analysis and structure.
- `backups/`: 원본 크롤링 데이터의 압축 백업 파일이 보관됩니다.
  - Stores the original compressed backup of the crawled data.
- `README.md`: 프로젝트의 전체 개요 및 가이드입니다.
  - Overall project overview and guide.

## 핵심 파일 경로 (Core File Paths)

- **Main Entrance:** [`website_archive/pages/main.do`](../website_archive/pages/main.do)
- **Common CSS:** [`website_archive/assets_common/css/layout.css`](../website_archive/assets_common/css/layout.css)
- **Common JS:** [`website_archive/assets_common/js/common.js`](../website_archive/assets_common/js/common.js)

## 경로 처리 (Path Handling)
모든 HTML, CSS, JS 파일 내의 절대 경로(`/...`)는 실제 폴더 계층에 맞는 **상대 경로**로 자동 변환되었습니다. 이를 통해 파일 시스템 어디에서든 링크 깨짐 없이 브라우저로 열람이 가능합니다.
All absolute paths in files have been converted to **relative paths** matching the physical hierarchy, ensuring seamless browsing from any location in the filesystem.
