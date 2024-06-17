<template>
  <div class="uk-padding uk-background-default">
    <div uk-slider tabindex="-1">
      <div class="uk-position-relative">
        <div class="uk-slider-container margl">
          <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-grid uk-grid-match uk-child-width-1-4@xl">
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
          <a class="uk-position-center-left-out" uk-slidenav-previous uk-slider-item="previous"></a>
          <a class="uk-position-center-right-out" uk-slidenav-next uk-slider-item="next"></a>
          <div class="uk-padding-small uk-margin-top mobilebuttons"> 
            <a class="uk-position-bottom-right uk-margin-medium-right uk-margin-bottom" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-bottom-right uk-margin-bottom" uk-slidenav-next uk-slider-item="next"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { WPApiHandler } from 'wpapihandler';

interface Personnel {
  slug: string;
  name: string;
  description: string;
  image: string;
  department: string;
}

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
      personnelList: [] as Personnel[],
    };
  },
  async mounted() {
    try {
      const personnel = await wpa.get_personnel();

      this.personnelList = personnel.map((person: any) => ({
        slug: person.slug,
        name: person.name,
        description: person.description,
        image: person.image,
        department: person.department,
      }));

      console.log("Personnel retrieved:", this.personnelList);
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

@media (min-width: 640px) {
  .margl {
    margin-left: 20px;
    margin-right: 2%;
  }
  .mobilebuttons {
    display: none;
  }
}

@media (max-width: 640px) {
  .uk-position-center-left-out {
    display: none;
  }
  .uk-position-center-right-out {
    display: none;
  }
}

.uk-card-media-top {
  height: 40vh;
}
</style>
