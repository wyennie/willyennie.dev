---
title: "HookScope"
tagline: "A static analyzer that flags unsafe React hook usage before it ships."
year: 2022
stack: ["TypeScript", "AST", "ESLint"]
featured: false
order: 10
summary: "Catches the common useEffect / useMemo footguns by walking the AST instead of pattern-matching."
---

A weekend tool that became an internal lint rule. It checks for the cluster of
React-hook mistakes that pass type checks but fail at runtime: stale closures
over state, dependency arrays that lie, effects that fire on every render.

The trick is not the rules — most of them already exist somewhere — but
running them as a single pass over a project's AST so the report comes back
in seconds rather than as ESLint noise per file.
