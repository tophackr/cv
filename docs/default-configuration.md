# Default Configuration

### Theme

```yml
custom_theme:
  light: light
  dark: dark
```

### Blocks

Blocks represent different sections of your website that can be placed in various parts of the page. By default, blocks are listed in random order, but you can change their arrangement as you see fit. For more information, see Blocks.

Default values will only work if the blocks are included in the `top`, `left`, `right` list.

```yml
blocks:
  top:
    summary:
      name: Summary
  left:
    experience:
      name: Experience
      reversed: true
      cell: col
      border: true
    additional_experience:
      name: Additional Experience
      reversed: true
      cell: row
      border: true
    achievements:
      name: Achievements
      reversed: false
      border: false
    education:
      name: Education
      reversed: true
      cell: row
      border: true
    languages:
      name: Languages
      reversed: false
      cell: row
  right:
    projects:
      name: Projects
      reversed: false
      border: true
    areas_expertise:
      name: Areas Expertise
      reversed: false
    skills:
      name: Skills
      reversed: false
    certificates:
      name: Certificates
      reversed: false
      border: true
    passions:
      name: Passions
      reversed: false
      border: false
```

You can remove any block from the configuration, and it will not be displayed on the website. This allows you to flexibly customize the appearance and content of your website according to your needs.
