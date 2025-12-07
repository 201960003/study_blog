---
layout: page
title: 전체 포스트
permalink: /categories/all/
---

# 전체 포스트

모든 포스트 목록입니다.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="color: #666; font-size: 0.9em;"> - {{ post.date | date: "%Y년 %m월 %d일" }}</span>
      {% if post.categories %}
        <span style="color: #999; font-size: 0.85em;"> [{{ post.categories | join: ', ' }}]</span>
      {% endif %}
    </li>
  {% endfor %}
</ul>

<p><a href="{{ '/' | relative_url }}">← 카테고리 목록으로 돌아가기</a></p>

