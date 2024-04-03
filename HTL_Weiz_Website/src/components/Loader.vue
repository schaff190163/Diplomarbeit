<template>
    <div style="height: 150px;" class="padtop padbot">
        <div class="loader"></div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Loader",
    }
</script>

<style>
.loader {
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l5 1s infinite linear alternate;
}
@keyframes l5 {
    0%  {box-shadow: 20px 0 #1BA373, -20px 0 #1ba3733a;background: #1BA373}
    33% {box-shadow: 20px 0 #1BA373, -20px 0 #1ba3733a;background: #1ba3733a}
    66% {box-shadow: 20px 0 #1ba3733a,-20px 0 #1BA373; background: #1ba3733a}
    100%{box-shadow: 20px 0 #1ba3733a,-20px 0 #1BA373; background: #1BA373}
}
</style>