---
layout: page
title: HTML/CSS 카테고리
permalink: /categories/html/
---

# HTML/CSS 카테고리

HTML, CSS 관련 포스트 목록입니다.

<ul>
  {% for post in site.posts %}
    {% if post.categories contains 'HTML' or post.categories contains 'CSS' or post.categories contains 'html' or post.categories contains 'css' %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span style="color: #666; font-size: 0.9em;"> - {{ post.date | date: "%Y년 %m월 %d일" }}</span>
      </li>
    {% endif %}
  {% endfor %}
</ul>

<p><a href="{{ '/' | relative_url }}">← 카테고리 목록으로 돌아가기</a></p>

