---
layout: default
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag }}/
eleventyComputed:
  title: "{{ tag }}"
---  

{% for post in collections[tag] reversed %}
<div class="py-4">
  <p>
    <span class="text-large sm:text-xl font-bold hover:text-blue-700 leading-tight"><a href="{{ post.url }}">{{ post.data.title }}</a></span>
  </p>
  {% if tag == "em português" %}
  <span class="text-xs sm:text-sm font-normal">{{ post.date | date: "%d de %B de %Y" }}</span>
  {% else %}
  <span class="text-xs sm:text-sm font-normal">{{ post.date | date: "%Y-%m-%d" }}</span>
  {% endif %}
</div>
{% endfor %}
