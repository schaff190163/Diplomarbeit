<template>
  <div class="uk-padding">
    <div uk-grid>
        <div class="uk-width-auto@m">
            <ul class="uk-tab-left" uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
                <li v-for="(level, index) in levels" :key="index" @click="selectLevel(index)">
                  <a href="#">{{ level }}</a>
                </li>
            </ul>
        </div>
        <div class="uk-width-expand@m">
            <ul id="component-tab-left" class="uk-switcher">
              <li v-for="level in levels">
                <div v-if="selectedLevel === levels.indexOf(level)" class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="autoplay: true; autoplay-interval: 1000">
                  <ul class="uk-slider-items uk-flex-center uk-grid">
                    <li v-for="partner in filteredPartners" :key="partner.id">
                      <div class="uk-panel">
                        <div class="logo-container">
                          <img class="logo" :src="partner.logo" alt="">
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { WPApiHandler } from 'wpapihandler';

export default {
  data() {
    return {
      partners: [],
      levels: ["Hauptsponsor", "Platin", "Gold", "Silber"],
      selectedLevel: 0
    };
  },
  async mounted() {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
    };
    const url = 'https://dev.htlweiz.at/wordpress';
    const wpa = new WPApiHandler(url, headers);
    try {
      this.partners = await wpa.get_partners('emily');
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  },
  computed: {
    filteredPartners() {
      return this.partners.filter(partner => partner.level === this.levels[this.selectedLevel]);
    }
  },
  methods: {
    selectLevel(index) {
      this.selectedLevel = index;
    }
  }
};
</script>

<style scoped>
.logo-container {
  width: 175px;
  height: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  max-width: 100%;
  max-height: 100%;
}
</style>
