# Achievements

Achievements are configured in the `achievements.yml` file located in the `_data` folder. This file is an array of data containing information about achievements.

#### Attributes

`title`: [string](https://shopify.github.io/liquid/basics/types/#string)

* The title of the achievement.

`description`: [string](https://shopify.github.io/liquid/basics/types/#string)

* The description of the achievement.

`icon`: [string](https://shopify.github.io/liquid/basics/types/#string)

* The name of the icon with the file extension.\
  \* Icons should be placed in the `assets/blocks` folder.

#### Configuration

`name`? [string](https://shopify.github.io/liquid/basics/types/#string)

* The name of the displayed block.

`reversed`? [boolean](https://shopify.github.io/liquid/basics/types/#boolean)

* Determines whether the list will be reversed. [More detailed](introducation.md#reverse-list).

`border`? [boolean](https://shopify.github.io/liquid/basics/types/#boolean)

* Determines whether the blocks will have a border.

**Default Configuration**

```yml
blocks:
  [position]:
    achievements:
      name: Achievements
      reversed: false
      border: false
```
