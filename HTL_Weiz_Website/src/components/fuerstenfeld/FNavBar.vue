<template>
  <div>
    <div class="uk-position-relative">
      <div class="uk-position-top">
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky;">
          <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-container">
              <div uk-navbar>
                <div class=".uk-navbar-center">
                  <ul class="uk-navbar-nav">
                      <button class="uk-button uk-button-default navsmallscreen" type="button" uk-toggle="target: #offcanvas-nav"><span uk-icon="icon: menu; ratio: 2"></span></button>
                      <li><router-link class="uk-logo" to="/fuerstenfeld"><img src="/images/logo_ff.jpg" width="60"/></router-link></li>
                      <li><router-link class="uk-logo" to="/"><img src="/images/htl_logo.svg" width="100"/></router-link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      <div id="offcanvas-nav" uk-offcanvas="mode: push; overlay: true" class="navsmallscreen">
          <div class="uk-offcanvas-bar offcanvasstyle">
            <ul class="uk-nav uk-nav-primary uk-margin-auto-vertical">
              <li class="uk-active"><a href="#">Aktuelles</a>
              <ul class="uk-nav-sub uk-nav-default">
                <li><router-link to="/schulveranstaltungen">Schulveranstaltungen</router-link></li>
                <li><router-link to="/news">News</router-link></li>
              </ul>
              </li>
              <li class="uk-parent">
                <a href="#">Ausbildung</a>
                <ul class="uk-nav-sub uk-nav-default">
                  <li><router-link to="/wi">Wirtschaftsingenieure</router-link></li>
                  <li><router-link to="/et">Elektrotechnik</router-link></li>
                  <li><router-link to="/it">Informationstechnologie</router-link></li>
                  <li><router-link to="/ut">Maschinenbau - Umwelttechnik</router-link></li>
                  <li><router-link to="/mb">Maschinenbau - Anlagentechnik</router-link></li>
                  <li><router-link to="/at">Maschinenbau - Automatisierungstechnik</router-link></li>
                  <li><router-link to="/awi">Abendschule - Wirtschaftsingenieure</router-link></li>
                  <li><router-link to="/mt">Fachschule - Mechatronik</router-link></li>
                </ul>
              </li>
              <li><router-link to="/team">Team</router-link></li>
              <li><router-link to="/partner">Partner</router-link></li>
              <li class="uk-parent">
                <a href="#">Services</a>
                <ul class="uk-nav-sub uk-nav-default">
                  <li><router-link to="/students">SchülerInnen</router-link></li>
                  <li><router-link to="/teachers">LehrerInnen</router-link></li>
                  <li><router-link to="/parents">Eltern</router-link></li>
                </ul>
              </li>
            </ul>

          </div>
        </div>
  </div>
  <div style="height: 80px;"></div>
  </div>
</template>

<script lang="ts">
/* import ... from ...; */

export default {
  name: "Navbar",
  components: {
    /*,*/
  },
};
</script>

<style>
/* Styles for this component */
.img-logo {
  height: auto !important;
}
.nbrounded {
  border-radius: 50px !important;
}
.offcanvasstyle {
  background-color: #F8F8F8;
  color: #333; /* Set a dark text color */
}

@media (max-width: 640px){
  .img-logo{
    height: 400px !important;
  }
}
@media (max-width: 1075px){
  .navbigscreen {
    display: none !important;
  }
}

@media (min-width: 1075px) {
  .navsmallscreen {
    display: none !important;
  }
}
</style>