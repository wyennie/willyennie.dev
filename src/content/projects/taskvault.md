---
title: "TaskVault"
tagline: "Encrypted, append-only task log for people who don't trust task apps."
year: 2021
stack: ["Rails", "Postgres", "libsodium"]
featured: false
order: 12
summary: "Tasks as an append-only event log, encrypted at rest with per-user keys."
---

A small experiment in modeling todo items as events rather than rows. Editing
a task appends a new event; the current state is a fold over the log. Nice
side effect: an undo history falls out for free.

The encryption layer was less interesting than the data model — but it kept
me honest about which fields actually needed to be queryable.
