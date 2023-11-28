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
                      <a href="#landing" uk-scroll>
                        <img src="/src/assets/images/e2mily-logo.png" width="100" />
                      </a>
                    </li>
                    <li class="navbigscreen">
                      <a href="#model" uk-scroll>E²MILY</a>
                    </li>
                    <li class="navbigscreen">
                      <a href="#news" uk-scroll>News</a>
                    </li>
                    <li class="navbigscreen">
                      <a href="#team" uk-scroll>Team</a>
                    </li>
                    <li class="navbigscreen">
                      <a href="#sponsor" uk-scroll>Sponsoring</a>
                    </li>
                    <li class="navbigscreen">
                      <a href="/e2mily/contact" uk-scroll>Kontakt</a>
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
