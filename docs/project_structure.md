# Project Structure

This document provides an overview of the directory and file structure of the Hanbom High School website snapshot.

## Directory Overview

- `README.md`: The landing page for the project.
- `docs/`: Contains project documentation and analysis.
- `hanbom-h.goesw.kr/`: The main directory containing the crawled website content.
    - `hanbom-h/`: Contains the main entry point and sub-modules.
        - `main.do`: The primary homepage file (HTML/JSP snapshot).
    - `00_common/`: Shared assets like layout CSS and common JavaScript.
    - `css/`: Web-specific CSS files.
    - `js/`: Web-specific JavaScript files.
    - `upload/`: Uploaded media and documents from the original site.
    - `favicon.ico`: The website favicon.
- `_DataURI/`: Contains extracted or referenced data in URI format.
- `fonts.gstatic.com/`, `www.gstatic.com/`: Locally cached Google Fonts and static assets.
- `translate.google.com/`, `translate.googleapis.com/`: Locally cached Google Translate related assets.
- `.git/`: Git version control system directory.

## Key Files

### `hanbom-h.goesw.kr/hanbom-h/main.do`
The main entrance to the school website. It includes the navigation menu, notice board widgets, and main visual banners.

### `hanbom-h.goesw.kr/00_common/css/layout.css`
The core layout styles for the website.

### `hanbom-h.goesw.kr/00_common/js/common.js`
Shared JavaScript logic used across the site.
