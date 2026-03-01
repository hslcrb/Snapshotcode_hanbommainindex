# 프로젝트 구조 (Project Structure)

이 문서는 정비된 한봄고등학교 홈페이지 스냅샷의 통합 웹 구조를 설명합니다.
This document describes the unified web structure of the Hanbom High School website snapshot.

## 디렉토리 맵 (Directory Map)

### 1. 메인 진입점 (Main Entry)
- `index.html`: 홈페이지 메인 진입 페이지입니다. (Formerly `main.do`)
  - The primary entrance page of the website.

### 2. 통합 에셋 (Unified Assets) - `assets/`
표준화된 구조를 위해 모든 리소스가 `assets/` 폴더 내로 통합되었습니다.
All resources are consolidated into the `assets/` folder for a standardized structure.

- `css/`: 사이트 전반의 레이아웃, 디자인, 위젯 스타일이 포함됩니다.
  - Layout, design, and widget styles.
- `js/`: 코어 jQuery, 공통 스크립트, 그리고 내재화된 Google Translate 기능 등이 포함됩니다.
  - Core jQuery, common scripts, and localized Google Translate features.
- `images/`: 로고, 배경, 아이콘 및 외부(Google) 정적 이미지 에셋들입니다.
  - Logos, backgrounds, icons, and external (Google) static image assets.
- `fonts/`: Noto Sans, Nanum Gothic, Pretendard 및 Google Fonts 등을 로컬에서 제공합니다.
  - Local serving of various fonts including Nanum Gothic and Google Fonts.
- `uploads/`: 실제 서버에서 관리되던 미디어 및 게시판 업로드 파일들입니다.
  - Media and board upload files originally managed on the server.

### 3. 기타 (Miscellaneous)
- `docs/`: 프로젝트의 상세한 기술 분석 및 구조 설명 문서입니다 (Bilingual).
  - Detailed technical analysis and structure documentation.
- `backups/`: 원본 아카이브 상태를 보존한 백업 데이터입니다.
  - Backup data preserving the original archive state.

## 경로 처리 원칙 (Path Principles)
- **Relative Pathing**: 모든 파일 내부의 경로는 `./assets/...`와 같이 상대 경로로 구성되어, 웹 서버 없이도 완벽하게 동작합니다.
- **Normalization**: 모든 파일 확장자를 `.html`로 표준화하여 정적 웹 브라우징 효율을 높였습니다.
  - Standardized all file extensions to `.html` for efficient static browsing.
