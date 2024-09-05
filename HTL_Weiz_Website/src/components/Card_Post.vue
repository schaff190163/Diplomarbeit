<template>
  <div class="card-container">
    <!-- Card that wraps the entire post preview -->
    <div class="uk-inline roundedl uk-width-expand" @click="goToPost">
      <!-- Use the cover image if provided; otherwise, fall back to the default image -->
      <img :src="coverImage || defaultImage" class="card-image roundedl" alt="">
      
      <!-- Gradient overlay to make text readable on top of the image -->
      <div class="gradient uk-position-cover roundedl"></div>
      
      <!-- Badge indicating 'Erasmus +' if the post has the 'erasmus' tag -->
      <div v-if="hasErasmusTag" class="uk-card-badge uk-label">Erasmus +</div>
      
      <!-- Overlay with post details -->
      <div class="uk-overlay uk-position-bottom uk-light">
        <!-- Post title, limited to 50 characters -->
        <h3 class="uk-card-title" v-html="decodeEntities(limitTitle(post.title))"></h3>
        
        <!-- Post content, limited to 80 characters -->
        <div class="uk-text-light" v-html="decodeEntities(limitContent(post.content))"></div>
        
        <!-- Button that indicates more details available -->
        <div class="uk-button uk-button-text">Details</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Card_Post',
  props: {
    post: {
      type: Object,
      required: true,
    },
    coverImage: {
      type: String,
      default: ''  // Default to an empty string if no cover image is provided
    }
  },
  setup(props) {
    const router = useRouter();

    // Computed property to check if the post has the 'erasmus' tag
    const hasErasmusTag = computed(() => {
      return props.post.tags && props.post.tags.includes('erasmus');
    });

    // Function to navigate to the post detail view
    const goToPost = () => {
      router.push({ name: 'PostView', params: { id: props.post.id } });
    };

    return {
      hasErasmusTag,
      goToPost,
    };
  },
  methods: {
    // Method to decode HTML entities in the post title or content
    decodeEntities(html: string): string {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.documentElement.textContent || '';
    },
    // Method to limit the title length to 50 characters
    limitTitle(title: string): string {
      return title.length > 50 ? title.substring(0, 50) + '...' : title;
    },
    // Method to limit the content length to 80 characters
    limitContent(content: string): string {
      return content.length > 80 ? content.substring(0, 80) + '...' : content;
    },
  },
  data() {
    return {
      defaultImage: '/images/HTL_Page/wide/homepicture.png' // Default image if none is provided
    };
  }
});
</script>

<style scoped>
/* Container for the card */
.card-container {
  display: flex;
  flex-direction: column;
  height: 400px; 
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gradient {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(34, 30, 30));
}

</style>
