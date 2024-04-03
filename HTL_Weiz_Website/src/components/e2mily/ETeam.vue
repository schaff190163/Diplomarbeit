<template>
  <div class="uk-padding uk-background-default marg">
    <div class="uk-width-expand@m">
      <div class="uk-text-center uk-padding">
        <h1>Team</h1>
      </div>
    </div>
    <div class="uk-margin-right uk-margin-left">
      <div class="uk-position-relative uk-visible-toggle" tabindex="-1" uk-slider>
        <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-4@m uk-grid uk-grid-match">
          
          <li v-for="(personnel, index) in personnelList" :key="index">
            <div class="uk-card uk-card-default uk-padding-remove-left marg">
              <div class="uk-card-media-top uk-height-medium" :style="{ backgroundImage: 'url(' + personnel.image + ')' }"></div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">{{ personnel.name }}</h3>
                <p class="uk-text-truncate">{{ personnel.description }}</p>
              </div>
              <div class="uk-card-badge uk-label">{{ personnel.department }}</div>
            </div>
          </li>
        </ul>

        <a class="uk-position-center-left uk-position-small col" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small col" uk-slidenav-next uk-slider-item="next"></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { WPApiHandler } from 'wpapihandler';

const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};

const wpa = new WPApiHandler(url, headers);

export default {
  name: 'ETeam',
  data() {
    return {
      personnelList: [],
    };
  },
  async mounted() {
    try {
      const personnel = await wpa.get_personnel(undefined, ['emily']);

      this.personnelList = personnel.map(person => ({
        slug: person.slug,
        name: person.name,
        description: person.description,
        image: person.image,
        department: person.department,
      }));

      console.log("Personnel retrieved:", personnel);
    } catch (error) {
      console.error("Error retrieving personnel:", error);
    }
  }
}
</script>

<style scoped>
.uk-card-media-top {
  background-size: cover;
  background-position: center;
}

.uk-card-body {
  max-height: 80vh; 
  overflow: hidden;
}

.marg {
  margin-bottom: 20px;
}

.col {
  color: black;
}

.uk-card-media-top {
    height: 40vh;
}
</style>
