# Passions

Passions are configured in the `passions.yml` file located in the `_data` folder. This file is an array of data containing information about your passions.

### Attributes

`name`: [string]
- The name of the passion. This name will be displayed in the corresponding block on your website.

`description`: [string]
- A description of the passion. Here you can describe in detail what you are passionate about and why it is important to you.

`icon`: [string]
- The filename of the icon with the extension.  
<small>* Icons should be placed in the `assets/blocks` folder.</small>

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
    passions:
      name: Passions
      reversed: false
      border: false
```

[string]: https://shopify.github.io/liquid/basics/types/#string
[boolean]: https://shopify.github.io/liquid/basics/types/#boolean
[reversed-more]: introducation.md#reverse-list
[cell]: introducation.md#cell
[cell-more]: introducation.md#usage-example