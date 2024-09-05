<template>
  <div v-if="events.length" class="padleftright">
    <h1 class="mpheading padtop">
      <span class="uk-text-light">Wichtige Aktuelle Informationen</span>
    </h1>
    <div>
      <div v-for="event in events" :key="event.id" class="padbot">
        <button 
          class="uk-button roundedl uk-button-primary uk-width-expand" 
          :uk-tooltip="`title: ${event.title}; delay: 500`" 
          @click="navigateToEvent(event)"
        >
          {{ event.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { WPApiHandler, type Event } from 'wpapihandler';

export default {
  name: 'TemporaryEvents',
  setup() {
    const events = ref<Event[]>([]);

    const url = 'https://dev.htlweiz.at/wordpress';
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
    };

    const wp = new WPApiHandler(url, headers);

    const fetchEvents = async () => {
      try {
        const response = await wp.get_events();
        events.value = response;
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    const navigateToEvent = (event: Event) => {
      const url = event.content.trim();
      if (url.startsWith('http')) {
        window.location.href = url;
      } else {
        console.warn('No valid URL found in event content.');
      }
    };

    onMounted(() => {
      fetchEvents();
    });

    return {
      events,
      navigateToEvent,
    };
  },
};
</script>
