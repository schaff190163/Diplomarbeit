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
                <p class="uk-text-truncate">{{ truncateDescription(personnel.description) }}</p>
                <!-- Ensure 4 lines of content -->
                <template v-for="i in 4 - countLines(personnel.description)">&nbsp;<br></template>
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

<script>
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
        department: person.department, // Add department field
      }));

      console.log("Personnel retrieved:", personnel);
    } catch (error) {
      console.error("Error retrieving personnel:", error);
    }
  },
  methods: {
    truncateDescription(description) {
      const charCount = 20; // Adjust this value to your desired character count
      let result = '';
      let count = 0;

      for (let i = 0; i < description.length; i++) {
        count++;

        if ((description[i] === ';' || description[i] === ' ') && count > charCount) {
          result += '\n';
          count = 0;
        }

        result += description[i];
      }
      description = result
      return description;
    },
    countLines(description) {
      // Count the number of lines in the description
      return description ? description.split(/\r\n|\r|\n/).length : 0;
    }
  }
};
</script>

<style scoped>
.uk-card-media-top {
  background-size: cover;
  background-position: center;
}

.uk-card-body {
  max-height: 150px; /* Adjust the max-height to your preference */
  overflow: ;
}

.marg {
  margin-bottom: 20px;
}

.col {
  color: black;
}

@media (max-width: 960px) {
  .uk-child-width-1-4@m {
    flex-basis: 50%;
  }
}

@media (max-width: 640px) {
  .uk-child-width-1-4@m {
    flex-basis: 100%;
  }

  .uk-card-media-top {
    height: 200px; /* Adjust the height to your preference */
  }
}
</style>
