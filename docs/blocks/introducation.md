# Introduction

### Block Names

You can remove the `name` property from each block. The English name will be automatically substituted based on the block name. This simplifies the configuration process and makes the code cleaner and more readable.

### Reverse List

If the reverse list is enabled, the items will be displayed in reverse order. In the `experience` and `additional_experience` blocks, sorting is done by date, and reversing will display them starting from the oldest date. This is useful for displaying chronological information in reverse order, such as showing the earliest events first.

### Cell

Depending on the cell passed, the date and subtitle content will be displayed differently:

* `row`: The subtitle, date, and location will be in one line, saving space and making the information more compact.
* `col`: The subtitle, date, and location will be in different lines one below the other, improving readability and data structure.

#### Usage Example

```yaml
cell: 'row' | 'col'
```

Use the value `row` or `col` depending on how you want to display the information in your block. This allows you to flexibly customize the appearance and structure of the content according to your needs.
