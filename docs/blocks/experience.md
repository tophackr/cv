# Experience

For each `experience` block, a separate file is created in the `_experience` folder. The file name can be anything, as it will not be used in the display.

### Attributes

`position`: [string]
- Specify the position held.

`company`: [string]
- The name of the company you worked for.

`location`: [string]
- The location of the company or your location, depending on your preference.

`start_date`: [date]
- The start date of employment at the company.

`end_date`?: [date]
- The end date of employment at the company. If the end date is not specified, the value `present` from the `_config.yml` file will be displayed.

After the attributes, there is a Markdown block where you can describe your responsibilities in the position, skills acquired, or problems solved. An example can be found [here][example].

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
    experience:
      name: Experience
      reversed: true
      cell: col
      border: true
```

[example]: https://github.com/tophackr/cv/blob/main/_experience/brightwave-digital.md?plain=1
[string]: https://shopify.github.io/liquid/basics/types/#string
[boolean]: https://shopify.github.io/liquid/basics/types/#boolean
[date]: https://shopify.github.io/liquid/filters/date/
[reversed-more]: introducation.md#reverse-list
[cell]: introducation.md#cell
[cell-more]: introducation.md#usage-example