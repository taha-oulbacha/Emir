# Emir — Coaching Website

A static website presenting a bodybuilding coach's services, coaching plans, transformation gallery, and contact options.

## What it does

- Displays coaching information and three service plans.
- Opens plan-specific WhatsApp enquiry links.
- Shows transformation images and social profile links.
- Toggles the navigation menu with JavaScript.
- Includes an EmailJS contact-form integration.

This repository contains a landing page, not a booking platform, payment system, or coaching dashboard. Email delivery has not been verified as part of the documentation review.

## Why it exists

The site brings the coach's service information and enquiry options into one page.

## Stack

HTML, CSS, vanilla JavaScript, Font Awesome, and the EmailJS browser SDK.

## Run locally

Prerequisites: Python 3 and a browser. External icons and EmailJS require an internet connection.

```sh
git clone https://github.com/taha-oulbacha/Emir.git
cd Emir
python3 -m http.server 5173 --bind 127.0.0.1
```

Open **http://localhost:5173**.

Viewing the site needs no backend or package installation. Before testing real form submissions, configure an EmailJS account and template you control: initialization is in `index.html`, and service/template references are in `script.js`. Do not use the existing recipient or WhatsApp links for automated tests.

## Repository map

| Path | Purpose |
| --- | --- |
| `index.html` | Page content and EmailJS initialization |
| `style.css` | Layout and styling |
| `script.js` | Menu, plan links, and contact-form handler |
| `img/` | Coach images |
| `transformations/` | Transformation gallery |

## Known limitations

- The page is missing viewport metadata.
- Form fields need explicit accessible labels.
- Some footer links are placeholders, and the Contact anchor has inconsistent capitalization.
- Submission errors are logged to the console rather than shown to the visitor.
- No automated tests or CI workflow are included.

## Screenshots and demo

No verified hosted demo is documented yet. Planned screenshots: landing section, coaching plans, and a mobile view after responsive checks.

## Implementation notes

The project uses direct DOM event handlers and externally hosted contact services. Its scope demonstrates static-site interactions; it does not demonstrate a custom backend.

<!-- Maintainer: confirm whether this was client work or practice, your contribution, permitted image use, and personal lessons learned. -->

## License and assets

A project-wide license is pending confirmation of code ownership and client permissions. Photos, branding, and transformation images must not be assumed reusable.
