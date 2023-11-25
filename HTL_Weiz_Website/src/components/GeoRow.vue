<template>
  <div class="padbot padleftright geogrid" uk-grid uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200">
    <img src="/src/assets/images/bbb_logo.png" alt="BusBahnBim Logo"
      uk-tooltip="title: BusBahnBim Routenplaner; delay: 500" href="https://verkehrsauskunft.verbundlinie.at/"
      class="geoimg">
    <img src="/src/assets/images/gm_logo.svg" alt="Google Maps"
      uk-tooltip="title: Google Maps Standort HTL Weiz; delay: 500"
      href="https://www.google.com/maps?ll=47.22529,15.621008&z=15&t=m&hl=de-DE&gl=US&mapclient=embed&q=Dr.-Karl-Widdmann-Stra%C3%9Fe+40+8160+Weiz"
      class="geoimg">
  </div>
</template>

<style>
/* Styles for this component */
.geogrid {
  display: flex;
  justify-content: center;
  align-items: center;
}

.geoimg {
  height: 50px;
  padding-left: 20vh;
  padding-right: 20vh;
}</style>
