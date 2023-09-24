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
                    <li>
                      <router-link class="uk-logo" to="/">
                        <img
                          src="/src/assets/images/htl_logo.svg"
                          width="100"
                          height=""
                          alt="HTL Logo"
                        />
                      </router-link>
                    </li>
                    <li>
                      <a href="#">Ausbildung</a>
                      <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                          <li>
                            <router-link to="/wi"
                              >Wirtschaftsingenieure</router-link
                            >
                          </li>
                          <li>
                            <router-link to="/et">Elektrotechnik</router-link>
                          </li>
                          <li>
                            <router-link to="/it"
                              >Informationstechnologie</router-link
                            >
                          </li>
                          <li>
                            <router-link to="/ut"
                              >Maschinenbau - Umwelttechnik</router-link
                            >
                          </li>
                          <li>
                            <router-link to="/mb"
                              >Maschinenbau - Anlagentechnik</router-link
                            >
                          </li>
                          <li>
                            <router-link to="/at"
                              >Maschinenbau -
                              Automatisierungstechnik</router-link
                            >
                          </li>
                          <li>
                            <router-link to="/awi"
                              >Abendschule - Wirtschaftsingenieure</router-link
                            >
                          </li>
                          <li>
                            <router-link to="/mt"
                              >Fachschule - Mechatronik</router-link
                            >
                          </li>
                          <li>
                            <router-link to="/itk"
                              >Kolleg - Informatik</router-link
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><router-link to="/team">Team</router-link></li>
                    <li>
                      <a href="#">Services</a>
                      <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                          <li>
                            <router-link to="/students"
                              >SchülerInnen</router-link
                            >
                          </li>
                          <li>
                            <router-link to="/teachers"
                              >LehrerInnen</router-link
                            >
                          </li>
                          <li>
                            <router-link to="/parents">Eltern</router-link>
                          </li>
                          <li>
                          </li>
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
  height: auto;
}
@media (max-width: 640px){
  .img-logo{
    height: 400px;
  }
}
</style>
