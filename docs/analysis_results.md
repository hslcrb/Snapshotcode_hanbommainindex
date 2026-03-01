# Project Analysis Results

## Purpose
The primary goal of this project is to archive a functional snapshot of the Hanbom High School website as it existed on February 28, 2026. This serves as a historical record and a reference for the site's design and content.

## Technical Analysis

### Snapshot Method
The site appears to have been captured using a web crawling or "SingleFile" style approach, where dynamic resources are converted to static files or data URIs to ensure offline functionality.

### Core Technologies
1. **CMS/Backend (Inferred):** The original site likely used a Java-based CMS (Spring/Struts) indicated by the `.do` file extensions (e.g., `main.do`).
2. **Frontend Framework:** 
   - **jQuery:** Heavily used for DOM manipulation and widgets (e.g., `jquery.min.js`, `slick.min.js`, `jquery.bxslider.js`).
   - **Modernizr:** For feature detection.
   - **Custom Widgets:** Uses an "edit widget" system (`widgEdit`, `widgApi`) likely specific to the CMS provider.
3. **Styling:** CSS-based layouts with specific template types (e.g., `T0021`).

### Content Breakdown
- **School Introduction:** Greetings, history, goals, and symbols.
- **Admission Information:** Department intros (Beauty Art, Character Creation, etc.), recruitment guidelines, and counseling.
- **School Life:** Notices, meal plans, club activities, and student regulations.
- **Employment/Advancement:** Job placement data and career resources.
- **Public Disclosure:** Budget reports, committee minutes, and administrative services.

## Observations
- The codebase is highly dependent on jQuery and standard layout patterns typical for Korean educational institutions.
- The use of `.do` mappings in a static environment suggests that links have been preserved to match the original internal structure, but serve static content.
- External CDNs (Google Fonts, Translate) have been partially internalized to ensure local access.
