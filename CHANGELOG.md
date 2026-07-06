# Changelog

All notable changes to Time Tracker are documented here.

## [0.5.0] - 2026-07-06

### Added
- Favicon set, web app manifest, and Open Graph / Twitter Card meta tags for social sharing and SEO.
- Footer credit line with license: "© 2026 Concept by Arno Faure · Licensed under CC BY-NC 4.0".
- GitHub Pages deployment (custom domain: time.arnofaure.com).

## [0.4.0] - 2026-07-06

### Added
- Manual time entry now accepts a **duration** (e.g. `1h30`, `45m`) in addition to exact start/end times — filling one updates the other.
- Time entry **history** per task: view, edit, or delete any previously logged session.

## [0.3.0] - 2026-07-06

### Added
- **Client colors** — auto-assigned from the app's accent palette, click to cycle through it. Used as the client card's outline in the list view and as the block color in the calendar view.

### Changed
- Removed the redundant "Time Tracker" label from the top toolbar (the app name already lives in the logo menu).

## [0.2.0] - 2026-07-06

### Added
- **Weekly calendar view** — day/hour grid with colored time blocks per session, live "now" line, week navigation, and weekly totals. Toggle it from the top toolbar (List / Calendar).
- **Per-project hourly rate override**, in addition to the app-wide default rate.
- **Billable / unbillable** toggle per task — time still counts toward totals, cost is excluded when unbillable.

### Changed
- Full UI translated to English.

## [0.1.0] - 2026-07-06

- Initial release: Clients → Projects → Tasks hierarchy, start/stop timer, manual time entry, default hourly rate, autosave to local storage, export/import as JSON.
