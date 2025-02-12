# Languages

Languages are configured in the `languages.yml` file located in the `_data` folder. This file is an array of data containing information about the languages you know.

### Attributes

`language`: [string]
- The name of the language. For example, "English", "Spanish", "Chinese", etc.

`level`: [string]
- The proficiency level in the language. This can be "Beginner", "Intermediate", "Advanced", or "Native".

`points`: [number]
- The number of points displayed on the page. The maximum value is 5. This allows you to indicate how well you know the language, where 1 is the minimum level and 5 is the maximum level.

### Configuration

`name`?: [string]
- The name of the displayed block.

`reversed`? [boolean]
- Whether the list will be reversed. [More details][reversed-more]

`cell`?: `row` | `col`
- Display of languages depending on the value of the `cell` parameter:
> `row`: Displays two languages in one row. This is useful if you want to compactly place information about several languages in one row.
>
> `col`: Displays one language in one row. This allows you to present information about each language in more detail, highlighting it in a separate row.

#### Default Configuration

```yml
blocks:
  [position]:
    languages:
      name: Languages
      reversed: false
      cell: row
```

[string]: https://shopify.github.io/liquid/basics/types/#string
[number]: https://shopify.github.io/liquid/basics/types/#number
[boolean]: https://shopify.github.io/liquid/basics/types/#boolean
[reversed-more]: introducation.md#reverse-list