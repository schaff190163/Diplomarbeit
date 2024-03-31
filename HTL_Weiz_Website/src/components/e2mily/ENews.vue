<template>
  <div class="uk-background-muted uk-padding" id="news">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
      <ul class="uk-slider-items uk-grid">
        
        <li v-for="post in posts" :key="post.id" class="uk-width-1-3">
          <div class="uk-panel">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" :data-src="post.image" uk-img></div>
              </div>
              <div class="uk-card-body uk-text-left">
                <p class="uk-text-bold uk-padding-remove-bottom">{{ post.date }}</p>
                <p class="uk-card-title">{{ post.title }}</p>
                <div v-html="post.truncatedContent"></div>
                <a class="linkcolor" href="#" @click.prevent="openModal(post)">Mehr Lesen</a>
              </div>
            </div>
          </div>
        </li>

      </ul>

      <a class="uk-position-center-left uk-position-small" uk-slidenav-previous uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-small" uk-slidenav-next uk-slider-item="next"></a>

    </div>
  </div>

  <div id="modal-example" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle uk-height-viewport" v-if="selectedPost">
      <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
      <div class="uk-padding-large">
        <h1>{{ selectedPost.title }}</h1>
        <div v-html="selectedPost.content"></div>
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
  data() {
    return {
      posts: [],
      selectedPost: null
    };
  },
  async mounted() {
    const posts = await wpa.get_posts(undefined, ['emily'])

    // Truncate content for each post and extract image source
    posts.forEach(post => {
      post.truncatedContent = this.truncateContent(post.content, 100);
      post.imageSrc = this.extractImageSrc(post.content); // New line to extract image src
      post.title = this.decodeEntities(post.title); // Decode HTML entities in title
    });

    // Log the extracted image source links
    posts.forEach(post => {
      console.log('Image src for post with ID ' + post.id + ':', post.imageSrc);
    });

    this.posts = posts;
    console.log("Posts retrieved:", posts);
  },
  methods: {
    truncateContent(content, maxLength) {
      if (content.length <= maxLength) {
        return content;
      } else {
        const truncatedContent = content.substr(0, content.lastIndexOf(' ', maxLength));
        return truncatedContent + '...';
      }
    },
    openModal(post) {
      this.selectedPost = post;
      UIkit.modal('#modal-example').show();
    },
    extractImageSrc(content) {
      const matches = content.match(/<img[^>]+src="([^">]+)"/);
      return matches ? matches[1] : null;
    },
    decodeEntities(html) {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.documentElement.textContent || '';
    },
    replaceHTMLCharacters(text) {
      return text.replace(/&#(\d+);/g, (match, dec) => {
        return String.fromCharCode(dec);
      });
    }
  }
};
</script>


<style scoped>

.section {
  height: 750px;
}

.maindiv {
  background-color: rgb(226, 226, 226);
}

.linkcolor {
  color: #666666;
}

.linkcolor:hover {
  color: rgb(193, 193, 193);
}

</style>
