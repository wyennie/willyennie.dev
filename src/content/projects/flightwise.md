---
title: "FlightWise"
tagline: "A flight-search aggregator that prices in time, not just dollars."
year: 2021
stack: ["Ruby on Rails", "Postgres", "Sidekiq"]
featured: false
order: 11
summary: "Ranks itineraries by total trip cost — including layovers, ground transit, and the productivity tax of redeyes."
---

Most flight search engines optimize for the headline price. FlightWise asked a
different question: if you actually counted the hours a trip costs you, which
itinerary wins?

Backend-heavy: a Sidekiq fan-out scrapes provider APIs in parallel, normalizes
schedules, and produces a single time-weighted ranking.
