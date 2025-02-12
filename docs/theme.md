# Theme

You can set themes for the adaptive system (dark or light mode on the computer) on the website. You can choose one of the themes using the [DaisyUI] library.

### Available Configurations

#### Single Theme for Dark and Light Mode

You can set a single theme that will be used in both dark and light modes:
```yml
custom_theme: dracula
```

#### Separate Themes for Dark and Light Mode

You can also set different themes for dark and light modes. In this case, if you do not specify one of the themes, the default value will be used. For example, you can change the theme only for light mode, leaving the `dark` theme for dark mode:
```yml
custom_theme:
    light: retro
    dark: night
```

If you completely remove the `custom_theme` attribute from the `_config.yml` file, the default theme will be used according to the [default value][theme-default].

[daisyui]: https://daisyui.com/docs/themes/
[theme-default]: default-configuration.md#theme