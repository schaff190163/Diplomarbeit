<template>
  <div>
    <div class="uk-position-relative">
      <div class="uk-position-top">
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky;">
          <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-container">
              <div uk-navbar>
                <div class="uk-navbar-center">
                  <ul class="uk-navbar-nav">
                      <button class="uk-button uk-button-default navsmallscreen" type="button" uk-toggle="target: #offcanvas-nav"><span uk-icon="icon: menu; ratio: 2"></span></button>
                      <li><router-link class="uk-logo" to="/"><img src="/images/htl_logo.svg" width="100"/></router-link></li>
                      <li class="navbigscreen">
                        <a href="#">Unsere Schule</a>
                        <div class="uk-navbar-dropdown">
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><router-link to="/team">Team</router-link></li>
                            <li><router-link to="/team">Verwaltung</router-link></li>
                            <li><a href="https://www.ttz-weiz.at/index.php/ttz-lern-center-weiz">TTZ</a></li>
                            <li><router-link to="/team">SchülerInnenvertretung</router-link></li>
                            <li><router-link to="/elternverein">Elternverein</router-link></li>
                            <li><a href="https://www.absolventen-htlweiz.at/">Absolventenverein</a></li>
                            <li><router-link to="/partner">Partner</router-link></li>
                            <li><router-link to="/sga">SGA</router-link></li>
                          </ul>
                        </div>
                      </li>
                      <li class="navbigscreen">
                        <a href="#">Ausbildung 14+</a>
                        <div class="uk-navbar-dropdown">
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><router-link to="/warumwir">Warum wir?</router-link></li>
                            <li><router-link to="/wi">Wirtschaftsingenieure</router-link></li>
                            <li><router-link to="/et">Elektrotechnik</router-link></li>
                            <li><router-link to="/it">Informationstechnologie</router-link></li>
                            <li><router-link to="/ut">Maschinenbau - Umwelttechnik</router-link></li>
                            <li><router-link to="/mb">Maschinenbau - Anlagentechnik</router-link></li>
                            <li><router-link to="/at">Maschinenbau -Automatisierungstechnik</router-link></li>
                            <li><router-link to="/mt">Fachschule - Mechatronik</router-link></li>
                          </ul>
                        </div>
                      </li>
                      <li class="navbigscreen">
                        <a href="#">Ausbildung 18+</a>
                        <div class="uk-navbar-dropdown">
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><router-link to="/awi">Abendschule - Wirtschaftsingineure</router-link></li>
                            <li><a href="http://www.ttz-weiz.net/index.php?option=com_content&task=section&id=4&Itemid=26">Individuele Kurse TTZ</a></li>
                          </ul>
                        </div>
                      </li>
                      <li class="navbigscreen">
                        <a href="#">Aufnahme</a>
                        <div class="uk-navbar-dropdown">
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><router-link to="/aufnahmeverfahren">Aufnahmeverfahren</router-link></li>
                            <li><router-link to="/vorteilehtl">Vorteile einer HTL Ausbildung</router-link></li>
                            <li><router-link to="/kennenlernangebote">Kennenlernangebote</router-link></li>
                            <li><router-link to="/schnuppern">Schnuppern</router-link></li>
                            <li><router-link to="/tagderoffenentuer">Tag der offenen Tür</router-link></li>
                          </ul>
                        </div>
                      </li>
                      <li class="navbigscreen">
                          <a href="#">Aktuelles</a>
                          <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                              <li><router-link to="/schulveranstaltungen">Schulveranstaltungen</router-link></li>
                              <li><router-link to="/news">News</router-link></li>
                            </ul>
                          </div>
                        </li>
                      <li class="navbigscreen">
                        <a href="#">Services</a>
                        <div class="uk-navbar-dropdown">
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><router-link to="/parents">Eltern</router-link></li>
                            <li><router-link to="/students">SchülerInnen</router-link></li>
                            <li><router-link to="/teachers">LehrerInnen</router-link></li>
                          </ul>
                          </div>
                      </li>
                      <li class="navbigscreen">
                        <a href="#">Rat & Hilfe</a>
                        <div class="uk-navbar-dropdown">
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><router-link to="/team">Sekreteriat</router-link></li>
                            <li><router-link to="/team">Bildungsberatung</router-link></li>
                            <li><router-link to="/team">Mädchenbeauftragte</router-link></li>
                            <li><router-link to="/team">VertrauenslehrerInnen</router-link></li>
                            <li><router-link to="/team">Schularzt</router-link></li>
                            <li><router-link to="/team">Schulpychologe</router-link></li>
                            <li><router-link to="/team">Jugendcoaching</router-link></li>
                            <li><router-link to="/team">Notfallnummern</router-link></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
  </div>
  <div id="offcanvas-nav" uk-offcanvas="mode: push; overlay: true" class="navsmallscreen">
    <div class="uk-offcanvas-bar offcanvasstyle">
      <ul class="uk-nav uk-nav-primary uk-margin-auto-vertical">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/team">Team</router-link></li>
        <li>
          <a href="#">Unsere Schule</a>
          <ul class="uk-nav-sub uk-nav-default">
            <li><router-link to="/team">Team</router-link></li>
            <li><router-link to="/team">Verwaltung</router-link></li>
            <li><a href="https://www.ttz-weiz.at/index.php/ttz-lern-center-weiz">TTZ</a></li>
            <li><router-link to="/team">SchülerInnenvertretung</router-link></li>
            <li><router-link to="/elternverein">Elternverein</router-link></li>
            <li><a href="https://www.absolventen-htlweiz.at/">Absolventenverein</a></li>
            <li><router-link to="/partner">Partner</router-link></li>
            <li><router-link to="/sga">SGA</router-link></li>
          </ul>
        </li>
        <li>
          <a href="#">Ausbildung 14+</a>
          <ul class="uk-nav-sub uk-nav-default">
            <li><router-link to="/warumwir">Warum wir?</router-link></li>
            <li><router-link to="/wi">Wirtschaftsingenieure</router-link></li>
            <li><router-link to="/et">Elektrotechnik</router-link></li>
            <li><router-link to="/it">Informationstechnologie</router-link></li>
            <li><router-link to="/ut">Maschinenbau - Umwelttechnik</router-link></li>
            <li><router-link to="/mb">Maschinenbau - Anlagentechnik</router-link></li>
            <li><router-link to="/at">Maschinenbau -Automatisierungstechnik</router-link></li>
            <li><router-link to="/mt">Fachschule - Mechatronik</router-link></li>
          </ul>
        </li>
        <li>
          <a href="#">Ausbildung 18+</a>
          <ul class="uk-nav-sub uk-nav-default">
            <li><router-link to="/awi">Abendschule - Wirtschaftsingineure</router-link></li>
            <li><a href="http://www.ttz-weiz.net/index.php?option=com_content&task=section&id=4&Itemid=26">Individuelle Kurse TTZ</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Aufnahme</a>
          <ul class="uk-nav-sub uk-nav-default">
            <li><router-link to="/aufnahmeverfahren">Aufnahmeverfahren</router-link></li>
            <li><router-link to="/vorteilehtl">Vorteile einer HTL Ausbildung</router-link></li>
            <li><router-link to="/kennenlernangebote">Kennenlernangebote</router-link></li>
            <li><router-link to="/schnuppern">Schnuppern</router-link></li>
            <li><router-link to="/tagderoffenentuer">Tag der offenen Tür</router-link></li>
          </ul>
        </li>
        <li>
          <a href="#">Aktuelles</a>
          <ul class="uk-nav-sub uk-nav-default">
            <li><router-link to="/schulveranstaltungen">Schulveranstaltungen</router-link></li>
            <li><router-link to="/news">News</router-link></li>
          </ul>
        </li>
        <li>
          <a href="#">Services</a>
          <ul class="uk-nav-sub uk-nav-default">
            <li><router-link to="/parents">Eltern</router-link></li>
            <li><router-link to="/students">SchülerInnen</router-link></li>
            <li><router-link to="/teachers">LehrerInnen</router-link></li>
          </ul>
        </li>
        <li>
          <a href="#">Rat & Hilfe</a>
          <ul class="uk-nav-sub uk-nav-default">
            <li><router-link to="/team">Sekretariat</router-link></li>
            <li><router-link to="/team">Bildungsberatung</router-link></li>
            <li><router-link to="/team">Mädchenbeauftragte</router-link></li>
            <li><router-link to="/team">VertrauenslehrerInnen</router-link></li>
            <li><router-link to="/team">Schularzt</router-link></li>
            <li><router-link to="/team">Schulpsychologe</router-link></li>
            <li><router-link to="/team">Jugendcoaching</router-link></li>
            <li><router-link to="/team">Notfallnummern</router-link></li>
          </ul>
        </li>
      </ul>
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
