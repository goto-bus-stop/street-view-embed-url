# street-view-embed-url

Get a [URL](https://developers.google.com/maps/documentation/urls/get-started#street-view-action)
to the street view image currently shown in a street view embed, with matching heading and zoom.

[![npm][npm-image]][npm-url]
[![github][github-image]][github-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/street-view-embed-url.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/street-view-embed-url
[github-image]: https://github.com/goto-bus-stop/street-view-embed-url/workflows/Node%20CI/badge.svg
[github-url]: https://github.com/goto-bus-stop/street-view-embed-url/actions
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install street-view-embed-url
```

## Usage

```js
import getStreetViewUrl from 'street-view-embed-url'

const url = getStreetViewUrl(streetView)
// → "https://www.google.com/maps/@?api=1&map_action=pano&pano=4DlwePXzmIn0wVOUpVj2og&viewpoint=37.78229489108098%2C-122.3910949675839&heading=264.5694516879916&pitch=11.234184088912102&fov=133.163577613723"
```

It returns a `URL` object.

## License

[MIT](LICENSE.md)
