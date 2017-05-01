# :house: [PropertiesCSS](http://www.propertiescss.com)

An open-source CSS Framework that aims to create a shorthand syntax for inline-CSS and remove the need for creating your own stylesheets.

## Wtf?!

Inspired by Adam Morse' work on tachyons and the concept that managing the cascade is actually more hassle than it's worth.

## The anatomy of a PropertiesCSS class

```html
<div class="p-1">
</div>
```

- `p`: The CSS property
- `-1`: The `rem` value

## Naming convention & goals

It makes sense that:

- Only classes are used in the framework, no ids
- A fixed & legible scale (in rem)
- Easy to reference config JSON file (`properties.json`)
- Most frequently used properties are the shortest classes
- Semantic classes where possible, e.g. `"background": "bg"`







```
- azimuth
- background-attachment
- background-color
- background-image
- background-position
- background-repeat
- background
- border-collapse
- border-color
  - border-top-color
  - border-right-color
  - border-bottom-color
  - border-left-color
- border-spacing
- border-style
  - border-top-style
  - border-right-style
  - border-bottom-style
  - border-left-style
- border-width
  - border-top-width
  - border-right-width
  - border-bottom-width
  - border-left-width
- border
  - border-top
  - border-right
  - border-bottom
  - border-left
- bottom
- caption-side
- clear
- clip
- color
- content
- counter-increment
- counter-reset
- cue
  - cue-after
  - cue-before
- cursor
- direction
- display
- elevation
- empty-cells
- float
- font-family
- font-size
- font-style
- font-variant
- font-weight
- font
- height
- left
- letter-spacing
- line-height
- list-style-image
- list-style-position
- list-style-type
- list-style
- margin
  - margin-right
  - margin-left
  - margin-top
  - margin-bottom
- max-height
- max-width
- min-height
- min-width
- orphans
- outline-color
- outline-style
- outline-width
- outline
- overflow
- padding
  - padding-top
  - padding-right
  - padding-bottom
  - padding-left
- page-break
  - page-break-after
  - page-break-before
  - page-break-inside
- position
- quotes
- right
- table-layout
- text-align
- text-decoration
- text-indent
- text-transform
- top
- unicode-bidi
- vertical-align
- visibility
- white-space
- widows
- width
- word-spacing
- z-index
```

## Credits

Properties is a project by @alexchin. Its principles and techniques are very influenced by the following projects, organisations and individuals:

- [tachyons](http://tachyons.io/)
- [Atomic CSS](https://acss.io/)
- [JSS](http://cssinjs.org)

- [Basscss](http://basscss.com/)
- [Skeleton](http://getskeleton.com/)
- [Bulma](http://bulma.io/)
- [Pure.css](https://purecss.io/)
- [Milligram](https://milligram.github.io/)
- [concise](http://concisecss.com/)
- [TURRETCSS](http://turretcss.com/)
- [Amazium](https://www.amazium.co.uk/)
- [Cardinal](http://cardinalcss.com/)
