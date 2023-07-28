<template>
  <div>
    <div class="uk-position-relative">
      <div class="uk-position-top">
        <div uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light">
          <nav class="uk-navbar-container" uk-navbar>
          <div class="uk-container">
            <div uk-navbar>
              <div class=".uk-navbar-center">
                <ul class="uk-navbar-nav">
                  <li class="uk-logo">
                    <img class="img-logo" src="/src/assets/images/Logo_HTL_2013_Large.png" alt="Logo">
                  </li>
                  <li>
                    <a href="#">Aktuelles</a>
                    <div class="uk-navbar-dropdown">
                      <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="#">Schulveranstaltungen</a></li>
                        <li><a href="#">News</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">Ausbildung</a>
                    <div class="uk-navbar-dropdown">
                      <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="#">Elektrotechnik</a></li>
                        <li><a href="#">Informationstechnologie</a></li>
                        <li><a href="#">Maschinenbau - Anlagentechnik</a></li>
                        <li><a href="#">Maschinenbau - Automatisierungstechnik</a></li>
                        <li><a href="#">Maschinenbau - Umwelttechnik</a></li>
                        <li><a href="#">Mechatronik</a></li>
                        <li><a href="#">Wirtschaft</a></li>
                        <li><a href="#">HTL für Berufstätige (Abendschule)</a></li>
                        <li><a href="#">Kolleg Informatik</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">Schule</a>
                    <div class="uk-navbar-dropdown">
                      <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="#">Schulveranstaltungen</a></li>
                        <li><a href="#">News</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="#">Ansprechpartner</a></li>
                  <li>
                    <a href="#">Services</a>
                    <div class="uk-navbar-dropdown">
                      <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="#">Schüler:innen</a></li>
                        <li><a href="#">Lehrer:innen</a></li>
                        <li><a href="#">Eltern</a></li>
                        <li><a href="#">Anmeldung</a></li>
                      </ul>
                    </div>
                  </li>
                  <div class="uk-margin">
                    <form class="uk-search uk-search-default">
                      <a href="" class="uk-search-icon-flip" uk-search-icon></a>
                      <input class="uk-search-input rounded uk-margin-left" type="search" placeholder="Search" aria-label="Search">
                    </form>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* import ... from ...; */

export default {
  name: 'Navbar',
  components: {
    /*,*/
  },
};
</script>

<style>
/* Styles for this component */
.img-logo {
  max-height: 5%;
}
.rounded {
  border-radius: 20px; /* Adjust the value as needed */
}
</style>
