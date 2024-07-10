<template>
  <div>
    <div class="uk-position-relative">
      <div class="uk-position-top">
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky;">
          <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-container">
              <div class="uk-navbar">
                <ul class="uk-navbar-nav">
                  <a class="uk-navbar-left uk-navbar-nav navsmallscreen" uk-icon="icon: menu; ratio: 2" uk-toggle="target: #offcanvas-nav"></a>
                  <li><router-link class="uk-logo" to="/"><img src="/images/htl_logo.svg" width="100"/><img src="/images/logo_ff.png" width = "60"></router-link></li>
                  <li class="navbigscreen">
                    <div>
                      <nav class="uk-navbar-container" uk-navbar>
                        <div class="uk-navbar-right">
                          <ul class="uk-navbar-nav">
                            <li class="navbigscreen">
                              <a href="#">Unsere Schule</a>
                              <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                  <li><router-link to="/team">Team</router-link></li>
                                  <li><router-link to="/team#verwaltung">Verwaltung</router-link></li>
                                  <li><router-link to="/team#schülerinnenvertretung">SchülerInnenvertretung</router-link></li>
                                  <li><router-link to="/elternverein">Elternverein</router-link></li>
                                  <li><router-link to="/partner">Partner</router-link></li>
                                  <li><router-link to="/sga">SGA</router-link></li>
                                  <li><a href="https://www.absolventen-htlweiz.at/">Absolventenverein</a></li>
                                  <li><a href="https://www.ttz-weiz.at/index.php/ttz-lern-center-weiz">TTZ</a></li>
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
                                  <li><router-link to="/at">Maschinenbau - Automatisierungstechnik</router-link></li>
                                  <li><router-link to="/mt">Fachschule - Mechatronik</router-link></li>
                                </ul>
                              </div>
                            </li>
                            <li class="navbigscreen">
                              <a href="#">Ausbildung 18+</a>
                              <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                  <li><router-link to="/awi">Abendschule - Wirtschaftsingineure</router-link></li>
                                  <li><a href="http://www.ttz-weiz.net/index.php?option=com_content&task=section&id=4&Itemid=26">Individuelle Kurse TTZ</a></li>
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
                                  <li><router-link to="/news">News</router-link></li>
                                  <li><router-link to="/news">Erasmus</router-link></li>
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
                                  <li><router-link :to="{ path: '/team', query: { tag: 'Sekretariat' } }">Sekretariat</router-link></li>
                                  <li><router-link :to="{ path: '/team', query: { tag: 'Bildungsberatung' } }">Bildungsberatung</router-link></li>
                                  <li><router-link :to="{ path: '/team', query: { tag: 'Mädchenbeauftragte' } }">Mädchenbeauftragte</router-link></li>
                                  <li><router-link :to="{ path: '/team', query: { tag: 'VertrauenslehrerInnen' } }">VertrauenslehrerInnen</router-link></li>
                                  <li><router-link :to="{ path: '/team', query: { tag: 'Schularzt' } }">Schularzt</router-link></li>
                                  <li><router-link :to="{ path: '/team', query: { tag: 'Schulpsychologe' } }">Schulpsychologe</router-link></li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div id="offcanvas-nav" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar">
      <ul class="uk-nav uk-nav-default" uk-accordion="multiple: true">
        <li class="navsmallscreen uk-parent uk-light">
          <a class="uk-accordion-title" href="#">Unsere Schule</a>
          <div class="uk-accordion-content uk-nav-sub">
            <li><router-link to="/team">Team</router-link></li>
            <li><router-link to="/team#verwaltung">Verwaltung</router-link></li>
            <li><router-link to="/team#schülerinnenvertretung">SchülerInnenvertretung</router-link></li>
            <li><router-link to="/elternverein">Elternverein</router-link></li>
            <li><router-link to="/partner">Partner</router-link></li>
            <li><router-link to="/sga">SGA</router-link></li>
            <li><a href="https://www.absolventen-htlweiz.at/">Absolventenverein</a></li>
            <li><a href="https://www.ttz-weiz.at/index.php/ttz-lern-center-weiz">TTZ</a></li>
          </div>
        </li>
        <li class="navsmallscreen uk-light">
          <a class="uk-accordion-title" href="#">Ausbildung 14+</a>
            <div class="uk-accordion-content uk-nav-sub">
            <li><router-link to="/warumwir">Warum wir?</router-link></li>
            <li><router-link to="/wi">Wirtschaftsingenieure</router-link></li>
            <li><router-link to="/et">Elektrotechnik</router-link></li>
            <li><router-link to="/it">Informationstechnologie</router-link></li>
            <li><router-link to="/ut">Maschinenbau - Umwelttechnik</router-link></li>
            <li><router-link to="/mb">Maschinenbau - Anlagentechnik</router-link></li>
            <li><router-link to="/at">Maschinenbau - Automatisierungstechnik</router-link></li>
            <li><router-link to="/mt">Fachschule - Mechatronik</router-link></li>
            </div>
        </li>
        <li class="navsmallscreen uk-parent">
          <a class="uk-accordion-title" href="#">Ausbildung 18+</a>
          <div class="uk-accordion-content uk-nav-sub">
            <li><router-link to="/awi">Abendschule - Wirtschaftsingineure</router-link></li>
            <li><a href="http://www.ttz-weiz.net/index.php?option=com_content&task=section&id=4&Itemid=26">Individuelle Kurse TTZ</a></li>
          </div>
        </li>
        <li class="navsmallscreen uk-parent">
          <a class="uk-accordion-title" href="#">Aufnahme</a>
          <div class="uk-accordion-content uk-nav-sub">
            <li><router-link to="/aufnahmeverfahren">Aufnahmeverfahren</router-link></li>
            <li><router-link to="/vorteilehtl">Vorteile einer HTL Ausbildung</router-link></li>
            <li><router-link to="/kennenlernangebote">Kennenlernangebote</router-link></li>
            <li><router-link to="/schnuppern">Schnuppern</router-link></li>
            <li><router-link to="/tagderoffenentuer">Tag der offenen Tür</router-link></li>
          </div>
        </li>
        <li class="navsmallscreen uk-parent">
          <a class="uk-accordion-title" href="#">Aktuelles</a>
          <div class="uk-accordion-content uk-nav-sub">
            <li><router-link to="/news">News</router-link></li>
            <li><router-link to="/news">Erasmus</router-link></li>
          </div>
        </li>
        <li class="navsmallscreen uk-parent">
          <a class="uk-accordion-title" href="#">Services</a>
          <div class="uk-accordion-content uk-nav-sub">
            <li><router-link to="/parents">Eltern</router-link></li>
            <li><router-link to="/students">SchülerInnen</router-link></li>
            <li><router-link to="/teachers">LehrerInnen</router-link></li>
          </div>
        </li>
        <li class="navsmallscreen uk-parent">
          <a class="uk-accordion-title" href="#">Rat & Hilfe</a>
          <div class="uk-accordion-content uk-nav-sub">
            <li><router-link to="/team">Sekretariat</router-link></li>
            <li><router-link to="/team">Bildungsberatung</router-link></li>
            <li><router-link to="/team">Mädchenbeauftragte</router-link></li>
            <li><router-link to="/team">VertrauenslehrerInnen</router-link></li>
            <li><router-link to="/team">Schularzt</router-link></li>
            <li><router-link to="/team">Schulpsychologe</router-link></li>
            <li><router-link to="/team">Jugendcoaching</router-link></li>
            <li><router-link to="/team">Notfallnummern</router-link></li>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div style="height: 80px;"></div>
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
.navsmalltext{
  color: #6666;
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
  .navsmallscreen .uk-offcanvas-bar {
    background-color: #F8F8F8; 
  }
}
</style>
