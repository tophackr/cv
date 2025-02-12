# Contacts

Contact information is configured in the `contacts.yml` file located in the `_data` folder.

### Attributes

`phone`?: [string]
- The phone number associated with the profile.

`email`?: [string]
- The email address associated with the profile.

`location`?: [string]
- The location or place of residence of the profile.

`socials`?: [array]
- A list of the profile's social networks. Each array element should contain the following attributes:
> `url`: [string]
> - The link to the social network.
>
> `placeholder`?: [string]
> - The text that will be displayed instead of the link.
>
> `icon`?: [string]
> - The name of the icon file (including the extension).  
> <small>* Icons should be placed in the `assets/socials` folder.</small>

[string]: https://shopify.github.io/liquid/basics/types/#string
[array]: https://shopify.github.io/liquid/basics/types/#array