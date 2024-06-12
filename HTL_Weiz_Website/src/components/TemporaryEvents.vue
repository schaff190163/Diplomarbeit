<template>
  <div v-if="events.length" class="padleftright">
    <h1 class="mpheading padtop">
      <span class="uk-text-light">Wichtige Aktuelle Informationen</span>
    </h1>
    <div>
      <div v-for="event in events" :key="event.id" class="padbot"  @click="openModal(event)">
      <button class=" uk-button roundedl uk-button-primary uk-width-expand" :uk-tooltip="`title: ${event.title}; delay: 500`">
        {{ event.title }}
      </button>
    </div>
    </div>

    <div id="event-modal" uk-modal>
      <div class="uk-modal-dialog uk-modal-body roundedl">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h2 class="uk-modal-title">{{ selectedEvent.title }}</h2>
        <p v-html="selectedEvent.content"></p>
        <img :src="selectedEvent.image" alt="Event Image" class="uk-width-1-1 roundedl">
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
    const selectedEvent = ref<Event>({ id: 0, title: '', content: '', image: '', active: false });

    const url = 'https://dev.htlweiz.at/wordpress';
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Basic d3BhcGloYW5kbGVyOkp5cXZpbS1ndXBkdTEtZ3Vydm9y"
    };

    console.log('Init WPApiHandler');
    const wp = new WPApiHandler(url, headers);

    const fetchEvents = async () => {
      try {
        const response = await wp.get_events();
        events.value = response;
        console.log(events.value);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    const openModal = (event: Event) => {
      selectedEvent.value = event;
      UIkit.modal('#event-modal').show();
    };

    onMounted(() => {
      fetchEvents();
    });

    return {
      events,
      selectedEvent,
      openModal,
    };
  },
};
</script>

<style>
/* Add necessary styles here */
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
