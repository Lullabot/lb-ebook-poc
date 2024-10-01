---
title: "Table of Contents"
layout: table-of-contents
pagination:
  data: collections.booksWithPages
  size: 1
  alias: "bookWithPages"
  filter: "{{ page.filePathStem.split('/')[2] }}"
---

{% include "table-of-contents.liquid" %}
