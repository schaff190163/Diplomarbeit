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
                      <li><router-link class="uk-logo" to="/fuerstenfeld"><img src="/images/logo_ff.jpg" width="60"/></router-link></li>
                      <li><router-link class="uk-logo" to="/"><img src="/images/htl_logo.svg" width="100"/></router-link></li>
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

export default {
  name: "Navbar",
  components: {
  },
};
</script>

<style>
.nbrounded {
  border-radius: 50px !important;
}
.offcanvasstyle {
  background-color: #F8F8F8;
  color: #333;
}
</style>