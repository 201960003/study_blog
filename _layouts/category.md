---
layout: default
---
<h1>Category: {{ page.title }}</h1>
<ul>
  {% for post in site.posts %}
    {% if post.categories contains page.title %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}
      </li>
    {% endif %}
  {% endfor %}
</ul>
