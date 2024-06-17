<template>
  <div class="uk-background-muted uk-padding" id="news">
    <div tabindex="-1" uk-slider>
      <div class="uk-position-relative">
        <div class="uk-slider-container margl">
          
          <ul class="padbot uk-slider-items uk-margin-top uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-3@l uk-child-width-1-4@xl uk-grid-match">
            <li v-for="post in posts" :key="post.id">
              <div class="uk-card uk-card-default">
                <div class="uk-card-media-top margbot">
                  <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" :data-src="post.imageSrc" uk-img></div>
                </div>
                <div class="uk-card-body uk-text-left">
                  <p class="uk-card-title">{{ post.title }}</p>
                  <div v-html="post.truncatedContent"></div>
                  <p></p>
                  <a class="linkcolor marg" @click.prevent="openModal(post)">Mehr Lesen</a>
                </div>
              </div>
            </li>
          </ul>

          <a class="uk-position-center-left-out" uk-slidenav-previous uk-slider-item="previous"></a>
          <a class="uk-position-center-right-out" uk-slidenav-next uk-slider-item="next"></a>
          <div class="uk-padding-small uk-margin-top mobilebuttons"> 
            <a class="uk-position-bottom-right uk-margin-medium-right" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-bottom-right" uk-slidenav-next uk-slider-item="next"></a>
          </div>

        </div>
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

  </div>
</template>

<script lang="ts">
import { WPApiHandler } from 'wpapihandler';
import type { Post as WPPost } from 'wpapihandler';

const url = 'https://dev.htlweiz.at/wordpress';
const headers = {
  "Content-Type": "application/json",
  "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
};

const wpa = new WPApiHandler(url, headers);

interface Post extends WPPost {
  date: string;
  imageSrc?: string;
  truncatedContent?: string;
}

export default {
  name: 'ENews',
  data() {
    return {
      posts: [] as Post[],
      selectedPost: null as Post | null
    };
  },
  async mounted() {
    try {
      const posts = await wpa.get_posts(undefined, ['emily']) as WPPost[];

      // Truncate content for each post and extract image source
      posts.forEach(post => {
        const postWithDate: Post = {
          ...post,
          date: new Date().toISOString(), // Assign an appropriate date value
          truncatedContent: this.truncateContent(post.content, 100, post.title, 25),
          imageSrc: this.extractImageSrcList(post.content)[0],
          title: this.decodeEntities(post.title)
        };

        this.posts.push(postWithDate);
      });

      console.log("Posts retrieved:", this.posts);
    } catch (error) {
      console.error("Error retrieving posts:", error);
    }
  },
  methods: {
    truncateContent(content: string, maxLength: number, title: string, tlenght: number): string {
      function stripHtmlTags(text: string): string {
        return text.replace(/<[^>]*>?/gm, '').replace(/(#+\s+)/g, '');
      }
      const plainTextContent = stripHtmlTags(content);
      let add = 0;
      let new_maxLength = maxLength;
 
      if (title.length >= tlenght) {
        add = title.length % 2;
      }
      if (title.length > 100) {
        new_maxLength = maxLength - 40;
      }

      if ((plainTextContent.length + add) <= new_maxLength) {
        return plainTextContent;
      } else {
        const truncatedContent = plainTextContent.substr(0, plainTextContent.lastIndexOf(' ', new_maxLength - add));
        return truncatedContent + '...';
      }
    },
    openModal(post: Post) {
      this.selectedPost = post;
      UIkit.modal('#modal-example').show();
    },
    extractImageSrcList(content: string): string[] {
      const matches = content.match(/<img[^>]+src="([^">]+)"/g);
      if (!matches) return [];
      
      const srcList: string[] = [];
      for (const match of matches) {
        const src = match.match(/src="([^">]+)"/);
        if (src) {
          srcList.push(src[1]);
        }
      }
      return srcList;
    },
    decodeEntities(html: string): string {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.documentElement.textContent || '';
    }
  }
};
</script>

<style scoped>
.linkcolor {
  color: #666666;
}

.linkcolor:hover {
  color: rgb(193, 193, 193);
}

@media (min-width: 640px) {
  .margl {
    margin-left: 20px;
    margin-right: 2%;
  }
  .uk-card-media-top {
    background-size: cover;
    background-position: center;
    height: 30vh;
  }
  .uk-card-body {
    max-height: 38vh;
    overflow: hidden;
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
  .margbot {
    margin-bottom: 20px;
  }
  .uk-card-media-top {
    background-size: cover;
    background-position: center;
    height: 25vh;
  }
  .uk-card-body {
    max-height: 39vh;
    overflow: hidden;
  }
}

.ite {
  color: black;
}


</style>
