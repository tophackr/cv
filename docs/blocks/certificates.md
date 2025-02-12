# Certificates

Certificates are configured in the `certificates.yml` file located in the `_data` folder. This file is an array of data containing information about the certificates.

### Attributes

`name`: [string]
- The name of the certificate.

`url`?: [string]
- The link to the certificate.

`year`?: [date]
- The year the certificate was obtained.

`location`?: [string]
- The place where the certificate was obtained.

`description`?: [string]
- The description of the certificate.

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
    certificates:
      name: Certificates
      reversed: false
      border: true
```

[string]: https://shopify.github.io/liquid/basics/types/#string
[boolean]: https://shopify.github.io/liquid/basics/types/#boolean
[date]: https://shopify.github.io/liquid/filters/date/
[reversed-more]: introducation.md#reverse-list