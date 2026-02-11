# FHLB AI & Model Governance Interactive Guide

Standalone single-page web experience aligned to the FHLB governance specification.

## Files

- `index.html` - Page structure and section content
- `styles.css` - Visual system, layout, responsive behavior, and motion
- `app.js` - Interactivity (progress, concept map, lifecycle, regulatory widget, guidance diagnostics, governance maturity dashboard, exports)

## Run

Open `/Users/maksymsamadov/fhlb/index.html` directly in a browser.

Optional local server:

```bash
cd /Users/maksymsamadov/fhlb
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Notes

- The page is educational and decision-support only, not a system of record.
- No persistent storage is used by default.
- Governance Maturity Dashboard uses CDN-loaded libraries:
  - Chart.js (live radar chart)
  - jsPDF (1-page Governance Maturity Profile export)
- Interaction state is stored in `sessionStorage` and can be shared with URL params (`?profile=...`) without a backend.
