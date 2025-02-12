# Education

Education is configured in the `education.yml` file located in the `_data` folder. This file is an array of data containing information about education.

### Attributes

`profession`: [string]
- The obtained profession.

`university`: [string]
- The name of the university where the education took place.

`start_date`: [date]
- The start date of the education.

`end_date`: [date]
- The end date of the education.

`location`: [string]
- The location of the university.

### Configuration

`name`?: [string]
- The name of the displayed block.

`reversed`? [boolean]
- Whether the list will be reversed. [More details][reversed-more]

`cell`?: [cell]
- Placement of the date and company on the page. [More details][cell-more].

`border`? [boolean]
- Whether the block will have a border.

#### Default Configuration

```yml
blocks:
  [position]:
    education:
      name: Education
      reversed: true
      cell: row
      border: true
```

[string]: https://shopify.github.io/liquid/basics/types/#string
[boolean]: https://shopify.github.io/liquid/basics/types/#boolean
[date]: https://shopify.github.io/liquid/filters/date/
[reversed-more]: introducation.md#reverse-list
[cell]: introducation.md#cell
[cell-more]: introducation.md#usage-example