<template>
  <div>
    <div class="uk-position-relative">
      <div class="uk-position-top">
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light;">
          <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-container">
              <div uk-navbar>
                <div class="uk-navbar-center">
                  <ul class="uk-navbar-nav">
                    <li>
                      <router-link to="/e2mily" class="uk-logo">
                        <img src="/src/assets/images/e2mily-logo.png" width="100" />
                      </router-link>
                    </li>
                    <li class="navbigscreen">
                      <a>E²MILY</a>
                    </li>
                    <li class="navbigscreen">
                      <a>News</a>
                    </li>
                    <li class="navbigscreen">
                      <a>Team</a>
                    </li>
                    <li class="navbigscreen">
                      <a>Sponsoring</a>
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
export default {
  // Your component logic goes here
};
</script>

<style>
/* Your component styles go here */
</style>
