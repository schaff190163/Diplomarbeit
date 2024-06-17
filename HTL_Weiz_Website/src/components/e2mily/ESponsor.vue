<template>
  <div class="uk-padding">
    <div uk-grid>
        <div class="uk-width-1-4@m uk-width-1-3@s uk-width-1-2 uk-flex uk-flex-column">
            <ul class="uk-tab-left" uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
                <li v-for="(level, index) in levels" :key="index" @click="selectLevel(index)">
                  <a href="#">{{ level }}</a>
                </li>
            </ul>
        </div>
        <div class="uk-width-expand@m uk-width-2-3@s uk-width-1-1">
            <ul id="component-tab-left" class="uk-switcher">
              <li v-for="level in levels" :key="level">
                <div v-if="selectedLevel === levels.indexOf(level)" class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="autoplay: true; autoplay-interval: 1000">
                  <ul class="uk-slider-items uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid">
                    <li v-for="partner in filteredPartners" :key="partner.id">
                      <div class="uk-panel">
                        <div class="logo-container">
                          <img class="logospons" :src="partner.logo" alt="">
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

<script lang="ts">
import { WPApiHandler } from 'wpapihandler';

interface Partner {
  id: number;
  level: string;
  logo: string;
}

export default {
  name: 'ESponsor',
  data() {
    return {
      partners: [] as Partner[],
      levels: ["hauptsponsor", "Platin", "Gold", "Silber"],
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
      this.partners = await wpa.get_partners('emily') as Partner[];
      console.log(this.partners);
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
    selectLevel(index: number) {
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

.logospons {
  max-width: 100%;
  max-height: 100%;
}
</style>
