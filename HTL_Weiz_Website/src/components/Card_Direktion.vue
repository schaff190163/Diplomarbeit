<template>
  <div>
    <div
      class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin roundedl" uk-grid @click="openModal">
      <div class="uk-card-media-left uk-cover-container">
        <img src="/images/team/Gottfried_Purkarthofer.jpg" class="roundedl" uk-cover />
        <canvas width="600" height="400"></canvas>
      </div>
      <div>
        <div class="uk-card-body uk-text-middle uk-text-center">
          <h3 class="uk-card-title">Dir. DI Gottfried Purkarthofer</h3>
          <div class="uk-text-light">
            <p>Es ist nicht genug zu wissen - man muss auch anwenden.</p>
            <p>Es ist nicht genug zu wollen - man muss auch tun. </p>
            <p>(Johann Wolfgang von Goethe)</p>
          </div>
        </div>
        <div class="uk-card-badge uk-label">PU</div>
      </div>
    </div>
    <div id="pu" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical roundedl">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h3>Gottfried Purkarthofer</h3>
        <p>Dir. DI</p>
        <p>PU</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card_Direktion",
  props: {
    imgsrc: String,
    azname: String,
  },
  methods: {
    openModal() {
      // UIkit.modal('#pu').show();
    }
  }
};
</script>

<style scoped>
</style>
