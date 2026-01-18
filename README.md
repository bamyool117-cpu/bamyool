# BAMYOOL - Landing Page

Astro-based landing page for Chinese Inbound Marketing Agency (BAMYOOL).

## Setup & Run

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## Customization Guide

### 1. Logo
- Place your logo file at `public/logo.svg`.
- If the file exists, it will be automatically used.
- If not, the text "BAMYOOL" will be displayed.

### 2. Contact Information (Kakao & Phone)
- **Files to edit:**
  - `src/components/Hero.astro` (Hero section buttons)
  - `src/components/Contact.astro` (Bottom contact section)
  - `src/components/Pricing.astro` (Pricing buttons)
- **What to change:**
  - Search for `https://pf.kakao.com/PLACEHOLDER` and replace with your actual Kakao Channel link.
  - Search for `01055341170` (in `href="tel:..."`) if the phone number needs to change.

### 3. Images
- Simulation images are located in `public/images/`.
- You can replace `dianping_before.svg` and `dianping_after.svg` with your own if needed, but keep the filenames or update `src/components/CaseScenario.astro`.

### 4. Color Scheme
- Main colors are defined in `src/styles/global.css`:
  - `--color-accent`: The main amber/yellow highlight (#FFC000)
  - `--color-bg-dark`: Background for Hero/Footer
# bamyool
# bamyool
