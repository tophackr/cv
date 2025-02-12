# Skills

Skills are configured in the `skills.yml` file located in the `_data` folder. This file is an array of data containing information about various skills.

### Attributes

[`key`: [string]]
- The skill name should contain a string with the skill name. Each array element represents a separate skill that will be displayed in the skills block on your site.

### Configuration

`name`?: [string]
- The name of the displayed block.

`reversed`? [boolean]
- Whether the list will be reversed. [More details][reversed-more]

#### Default Configuration

```yml
blocks:
  [position]:
    skills:
      name: Skills
      reversed: false
```

[string]: https://shopify.github.io/liquid/basics/types/#string
[boolean]: https://shopify.github.io/liquid/basics/types/#boolean
[reversed-more]: introducation.md#reverse-list