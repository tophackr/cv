# Summary

To configure the `summary` block, you need to specify your description in the `description` attribute.

### Attributes

`description`: [string]  
- A description of your profile. This field is required as it provides a brief overview of you.

### Configuration

`name`?: [string]
- The name of the displayed block.  
<small>* To hide the name of the `summary` block, you can specify an empty string `''` in the name, and it will not be displayed.</small>

##### Default Configuration

```yml
blocks:
  [position]:
    summary:
      name: Summary
```

[string]: https://shopify.github.io/liquid/basics/types/#string