# Projects

Projects are configured in the `projects.yml` file located in the `_data` folder. This file is an array of data where each element describes an individual project.

### Attributes

`name`: [string]
- The name of the project.

`description`: [string]
- The description of the project.

`url`?: [string]
- The link to the project.

### Configuration

`name`?: [string]
- The name of the displayed block.

`reversed`? [boolean]
- Whether the list will be reversed. [More details][reversed-more]

`border`? [boolean]
- Whether the block will have a border.

#### Default Configuration

```yml
blocks:
  [position]:
    projects:
      name: Projects
      reversed: false
      border: true
```

[string]: https://shopify.github.io/liquid/basics/types/#string
[boolean]: https://shopify.github.io/liquid/basics/types/#boolean
[reversed-more]: introducation.md#reverse-list