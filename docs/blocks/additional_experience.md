# Additional Experience

Additional experience is configured almost the same way as the [experience] block, except for the `location` and `end_date` attributes. Each additional experience is created in a separate file in the `_additional_experience` folder. The file name can be anything, as it will not be used.

### Attributes

`position`: [string]
- Specify the position held.

`company`: [string]
- Specify the company name.

`start_date`: [date]
- Specify the start date of the engagement with the company.

`end_date`: [date]
- Specify the end date of the engagement with the company.

After specifying the attributes, you can add a Markdown block describing your responsibilities in the position, skills acquired, or problems solved. An example can be found [here][example].

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
    additional_experience:
      name: Additional Experience
      reversed: true
      cell: row
      border: true
```

[experience]: experience.md
[example]: https://github.com/tophackr/cv/blob/main/_additional_experience/code-crafters.md?plain=1
[string]: https://shopify.github.io/liquid/basics/types/#string
[boolean]: https://shopify.github.io/liquid/basics/types/#boolean
[date]: https://shopify.github.io/liquid/filters/date/
[reversed-more]: introducation.md#reverse-list
[cell]: introducation.md#cell
[cell-more]: introducation.md#usage-example