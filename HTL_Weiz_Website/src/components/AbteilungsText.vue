<template>
  <div class="padtop padbot padleftright">
    <div>
      <h2 class="uk-text-large">Inhaltliche Schwerpunkte</h2>
      <p class="uk-text-default">
        {{ schwerpunkte }}
      </p>
    </div>
    <div>
      <h2 class="uk-text-large">Persönliche Eigenschaften</h2>
      <p class="uk-text-default">
        {{ eigenschaften }}
      </p>
    </div>
    <div>
      <h2 class="uk-text-large">Karriereaussichten</h2>
      <p class="uk-text-default">
        {{ karriereaussichten }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AbteilungsText',
  props: {
    schwerpunkte: {
      type: String,
      required: true,
    },
    eigenschaften: {
      type: String,
      required: true,
    },
    karriereaussichten: {
      type: String,
      required: true,
    },
  },
});
</script>
