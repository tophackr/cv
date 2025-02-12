# Configuration

### Profile

`title`: [string]

* Author's name. Provide the full name of the author to be displayed in the profile.

`position`: [string]

* Position or specialty (e.g., Frontend Developer). This will help define the author's professional role.

`description`: [string]

* A detailed description to be displayed in the `summary` block. Describe the author's main achievements, skills, and experience.

`logo`: [string]

* By default, the avatar located in the `assets` folder named `avatar.png` is used. You can replace it with your own avatar or change its location by specifying a new link in this value.

### Default Configuration / Blocks

The default configuration can be found [here](default-configuration.md).\
The block configuration can be found [here](blocks/introducation.md).

***

#### SEO

```yml
locale: en
twitter:
  card: summary
```

It is recommended not to change these settings (except for `locale`). If you are familiar with SEO, you can configure them at your discretion by following the [configuration](https://github.com/jekyll/jekyll-seo-tag).

#### Other Settings

All other configuration settings can be found on the [Jekyll](https://jekyllrb.com/docs/configuration/) website.

[string]: https://shopify.github.io/liquid/basics/types/#string