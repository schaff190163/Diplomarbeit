<template>
  <div>
    <div class="lawe">
      <Calendar></Calendar>
      <AuszeichnungsRow></AuszeichnungsRow>
      <GeoRow></GeoRow>
      <Imprint></Imprint>
    </div>
  </div>
</template>

<script lang="ts">
import Imprint from "@/components/Imprint.vue";
import AuszeichnungsRow from "@/components/AuszeichnungsRow.vue";
import GeoRow from "@/components/GeoRow.vue";
import Calendar from "@/components/Calendar.vue";

export default {
  name: 'FooterMerge',
  components: {
  Imprint,
  AuszeichnungsRow,
  GeoRow,
  Calendar,
  },
};
</script>

<style>
/* Styles for this component */
.lawe {
  background-image: url('@/assets/images/lawe.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 250px;
}
</style>
