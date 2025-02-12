Achievements are configured in the `achievements.yml` file located in the `_data` folder. This file is an array of data containing information about achievements.

### Attributes

`title`: [string]

* The title of the achievement.

`description`: [string]

* The description of the achievement.

`icon`: [string]

* The name of the icon with the file extension.  
<small>* Icons should be placed in the `assets/blocks` folder.</small>

### Configuration

`name`? [string]

* The name of the displayed block.

`reversed`? [boolean]

* Determines whether the list will be reversed.

`border`? [boolean]

* Determines whether the blocks will have a border.

#### Default Configuration

```yml
blocks:
  [position]:
    achievements:
      name: Achievements
      reversed: false
      border: false
```

[string]: https://shopify.github.io/liquid/basics/types/#string
[boolean]: https://shopify.github.io/liquid/basics/types/#boolean