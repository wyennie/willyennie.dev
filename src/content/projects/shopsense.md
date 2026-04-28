---
title: "ShopSense"
tagline: "Headless commerce backend with a sane inventory model."
year: 2020
stack: ["Rails", "Postgres", "GraphQL"]
featured: false
order: 13
summary: "An e-commerce backend that treats inventory as a ledger, not a counter."
---

Inventory bugs are almost always race conditions disguised as integer columns.
ShopSense models stock as a double-entry ledger: every reservation, sale, and
restock is a row, and the available count is a view. Slower writes; correct
numbers under concurrent checkout.

GraphQL on the front, Rails service objects in the middle.
