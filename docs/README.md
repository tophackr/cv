# Introduction

**Block names**

You have the option to eliminate the `name` property from each block. Even without explicitly specifying the property, the corresponding name will be automatically assigned based on the block's identifier. This feature ensures consistency and reduces redundancy by allowing the system to smartly substitute the appropriate name

**Reverse list**

If the reverse list is enabled, the items will be displayed from the end to the beginning and vice versa if disabled. In the `experience` and `additional_experience` blocks, sort by date, and reverse will display them from the oldest date.

**Cell**

Depending on the passed cell, the content of the date and subtitle will be displayed differently.\
`row` - The subtitle and date, location will be in the same row.\
`col` - The subtitle and date, location will be in different rows below each other.

#### cell

```yaml
cell: 'row' | 'col'
```
