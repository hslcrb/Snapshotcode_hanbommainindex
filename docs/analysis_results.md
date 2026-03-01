# 분석 결과 (Analysis Results)

## 목적 (Purpose)
본 프로젝트의 주요 목적은 2026년 2월 28일 당시의 한봄고등학교 홈페이지 상태를 기능적으로 아카이빙하는 것입니다. 이는 사이트의 디자인과 콘텐츠에 대한 역사적 기록 및 참조 자료로 활용됩니다.

The primary goal of this project is to archive a functional snapshot of the Hanbom High School website as it existed on February 28, 2026. This serves as a historical record and a reference for the site's design and content.

## 기술 분석 (Technical Analysis)

### 스냅샷 방식 (Snapshot Method)
본 사이트는 오프라인 기능을 보장하기 위해 동적 리소스를 정적 파일이나 데이터 URI로 변환하는 웹 크롤링 또는 "SingleFile" 스타일의 접근 방식을 사용하여 캡처된 것으로 보입니다.

The site appears to have been captured using a web crawling or "SingleFile" style approach, where dynamic resources are converted to static files or data URIs to ensure offline functionality.

### 핵심 기술 (Core Technologies)
1. **CMS/백엔드 추정 (Inferred CMS/Backend):** `.do` 파일 확장자(예: `main.do`)로 보아 원본 사이트는 Java 기반 CMS(Spring/Struts 등)를 사용했을 가능성이 높습니다.
   - The original site likely used a Java-based CMS (Spring/Struts) indicated by the `.do` file extensions.
2. **프론트엔드 프레임워크 (Frontend Framework):** 
   - **jQuery:** DOM 조작 및 위젯(예: `slick.min.js`, `bxslider.js`)에 광범위하게 사용되었습니다.
     - Heavily used for DOM manipulation and widgets.
   - **Modernizr:** 브라우저 기능 감지를 위해 사용되었습니다.
     - Used for feature detection.
   - **커스텀 위젯 (Custom Widgets):** CMS 공급업체 전용으로 보이는 위젯 편집 시스템(`widgEdit`, `widgApi`)을 사용합니다.
     - Uses an edit widget system likely specific to the CMS provider.
3. **스타일링 (Styling):** 특정 템플릿 유형(예: `T0021`)을 기반으로 한 CSS 레이아웃을 사용합니다.
   - CSS-based layouts with specific template types.

### 콘텐츠 구성 (Content Breakdown)
- **학교 소개 (School Introduction):** 인사말, 연혁, 목표, 상징 등.
  - Greetings, history, goals, and symbols.
- **입학 안내 (Admission Information):** 학과 소개(뷰티아트, 캐릭터창작 등), 모집 요강, 상담 안내.
  - Department intros, recruitment guidelines, and counseling.
- **학교 생활 (School Life):** 공지사항, 식단표, 동아리 활동, 학생 규정.
  - Notices, meal plans, club activities, and student regulations.
- **취업/진학 (Employment/Advancement):** 취업 현황 및 진로 자료.
  - Job placement data and career resources.
- **정보 공개 (Public Disclosure):** 예결산 보고, 위원회 회의록, 행정 서비스.
  - Budget reports, committee minutes, and administrative services.

## 관찰 사항 (Observations)
- 본 코드베이스는 한국 교육 기관에서 흔히 볼 수 있는 jQuery 및 표준 레이아웃 패턴에 크게 의존하고 있습니다.
  - The codebase is highly dependent on jQuery and standard layout patterns typical for Korean educational institutions.
- 정적 환경에서 `.do` 매핑을 사용하는 것은 원본의 내부 구조를 유지하면서도 정적 콘텐츠를 제공하기 위함으로 보입니다.
  - The use of `.do` mappings in a static environment suggests links were preserved to match the original structure while serving static content.
- 로컬 접근성을 보장하기 위해 외부 CDN(Google Fonts, Translate)이 부분적으로 내재화되었습니다.
  - External CDNs were partially internalized to ensure local access.
