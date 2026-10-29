# Product Marketing Context

**Document version:** v1
**Last updated:** 2026-10-29

This file gives the marketing skills (`aso`, `copywriting`, `seo-audit`, `ai-seo`, `schema`) the facts about FretShed. It deliberately leaves out voice rules.

## Brand voice: read the source, not this file

`FretShed-Brand-Voice.md` in the app repo (`dcbltech/fretshed`, repo root) is the only source of voice rules, locked lines, banned words and feature wording. Read it in full before writing any user-facing copy, and check every line against its "What We Never Say" and "Grammar & Style Rules" sections. Where any skill's advice conflicts with it, the brand voice wins.

- In the app repo it is at the root.
- In the website repo (`dcbltech/fretshed-legal`) it is not committed. Read it from the app repo. If you can't reach it, don't write copy: say so and stop.

Positioning, audience wording, the AI line and feature descriptions are all in that doc. Don't copy them into this file, where they would drift.

## Product overview

- **What it is:** a guitar practice app for iPhone, iPad and Mac. Pick a genre, key and tempo, and FretShed uses AI to generate a solo over a backing track. The player works it out by ear. There are no tabs and no notation, by design.
- **Also in the app:** a solo library, A-B looping, speed control down to 50% with the pitch preserved, an Ear Tuner, a Metronome and a Recorder that keeps running in the background.
- **Genres shipped:** rock, blues, jazz, metal, funk. Keys: any major or minor key. Tempo: 60 to 120 bpm.
- **Platforms:** App Store (iPhone, iPad), Mac App Store. App Store id 6759403787.
- **Business model:** free to try, then a FretShed Pro subscription: $14.99 a month or $149.99 a year. Pro gives 80 solos every 30 days on a rolling window, and the library on iPhone, iPad and Mac. Check current prices and the paywall with the app repo's `./tools/rc` before quoting them.
- **Company:** Decibel Technologies Limited, England and Wales.
- **Website:** https://fretshed.dcbl.app/ (one landing page plus support, privacy and terms).

## Audience and jobs

See the brand voice doc's "Who We're Talking To". In short: guitarists two or more years in, who come at two moments: when they're stuck on the same licks, and when they need a solo for a gig, a jam or a song.

## Competitive landscape

The current competitor set, with rankings and screenshot captions, is in `aso-audit.md` in `dcbltech/fretshed-growth`. Read it there rather than relying on a copy.

## Proof points

- None yet. FretShed launched in 2026 and has few ratings. Never invent ratings, reviews, testimonials, user counts or statistics.
- Supported by ElevenLabs Grants (shown in the website footer).

## Goals and measurement

- Organic growth: App Store search tap-through first, then page view to install, then Search Console clicks and mentions in AI answers.
- Optimise for high-intent players, not raw installs.
- Baseline numbers, experiments and keywords are in `dcbltech/fretshed-growth` (`baseline.md`, `experiments.md`, `keywords.md`).

## Constraints

- English-language storefronts only for now.
- No site analytics: section 10 of the privacy policy promises the site uses none. Revisit only when content pages ship.
- Agents change things through PRs only. Naudé merges and runs the App Store Connect upload.
