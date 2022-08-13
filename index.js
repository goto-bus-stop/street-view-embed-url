'use strict'

/**
 * Get a [URL](https://developers.google.com/maps/documentation/urls/get-started#street-view-action)
 * to the street view image currently shown in a street view embed, with matching heading and zoom.
 *
 * It can be used to open the panorama on Google Maps in a new tab or to share the link:
 * ```js
 * const streetView = new google.maps.StreetViewPanorama()
 * copyLinkButton.onclick = () => {
 *   const url = getStreetViewUrl(streetView)
 *   navigator.clipboard.writeText(url)
 * }
 * ```
 *
 * @param {google.maps.StreetViewPanorama} streetView A StreetViewPanorama instance.
 * @return {URL}
 */
function getUrl (streetView) {
  const url = new URL('https://www.google.com/maps/@?api=1&map_action=pano')
  const { pano } = streetView.getLocation()
  const { lat, lng } = streetView.getPosition().toJSON()
  const { heading, pitch } = streetView.getPov()
  const fov = 180 / (2 ** streetView.getZoom())
  url.searchParams.set('pano', pano)
  url.searchParams.set('viewpoint', `${lat},${lng}`)
  url.searchParams.set('heading', String(heading))
  url.searchParams.set('pitch', String(pitch))
  url.searchParams.set('fov', String(fov))

  return url
}

module.exports = getUrl
