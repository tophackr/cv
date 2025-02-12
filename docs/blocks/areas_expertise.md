# Areas of Expertise

Areas of expertise are configured in the `areas_expertise.yml` file located in the `_data` folder. This file is an array of data containing information about various areas of expertise.

### Attributes

[`key`: [string]]: [string]
- The name of the area of expertise and its description (description is optional).

### Configuration

`name`?: [string]
- The name of the displayed block.

`reversed`? [boolean]
- Whether the list will be reversed. [More details][reversed-more]

#### Default Configuration

```yml
blocks:
  [position]:
    areas_expertise:
      name: Areas of Expertise
      reversed: false
```

[string]: https://shopify.github.io/liquid/basics/types/#string
[boolean]: https://shopify.github.io/liquid/basics/types/#boolean
[reversed-more]: introducation.md#reverse-list