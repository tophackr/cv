---
permalink: /
---

{% include blocks/profile.html %}

<div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
    <div class="col-span-2">
        {%- include include-block.html array=site.blocks.left -%}
    </div>
    <div>
        {%- include include-block.html array=site.blocks.right -%}
    </div>
</div>