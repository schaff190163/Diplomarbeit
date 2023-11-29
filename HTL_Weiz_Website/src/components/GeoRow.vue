<template>
  <div>
    <div class="geogrid padleftright padtop padbot">
      <div class="geoimg-container">
        <img src="/images/bbb_logo.png" alt="BusBahnBim Logo" uk-tooltip="title: BusBahnBim Routenplaner; delay: 500"
          href="https://verkehrsauskunft.verbundlinie.at/" class="geoimg">
      </div>
      <div class="geoimg-container">
        <img src="/images/gm_logo.svg" alt="Google Maps" uk-tooltip="title: Google Maps Standort HTL Weiz; delay: 500"
          href="https://www.google.com/maps?ll=47.22529,15.621008&z=15&t=m&hl=de-DE&gl=US&mapclient=embed&q=Dr.-Karl-Widdmann-Stra%C3%9Fe+40+8160+Weiz"
          class="geoimg">
      </div>
    </div>
  </div>
</template>

<style>
/* Styles for this component */
.geogrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30vw;
}

.geoimg {
  width: calc(35% + 60px);
  height: auto;
}

@media (max-width:750px) {
  .geogrid{
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}
</style>
