<template>
    <div class="box">
      <div class="sponsoren">
        <div class="overlap-group">
          <div class="haupt-sponsoren">HAUPT-SPONSOREN</div>
          <div class="div">
            <img class="rectangle" alt="Rectangle" src="rectangle-4.png" />
            <img class="rectangle" alt="Rectangle" src="rectangle-9.png" />
            <img class="rectangle" alt="Rectangle" src="rectangle-10.png" />
          </div>
          <Frame
            class="frame-22"
            div-class-name="frame-instance"
            ellipse-class-name="frame-instance"
            ellipse-class-name-override="frame-instance"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Frame from "./Frame.vue";
  
  export default {
    name: "Box",
    components: {
      Frame,
    },
  };
  </script>
  
  <style>
  .box {
    height: 1110px;
    width: 1920px;
  }
  
  .box .sponsoren {
    height: 1110px;
    left: 0;
    position: fixed;
    top: 0;
    width: 1922px;
  }
  
  .box .overlap-group {
    background-color: var(--variable-collection-dark-gray);
    height: 1110px;
    position: relative;
    width: 1920px;
  }
  
  .box .haupt-sponsoren {
    color: #fffdfd;
    font-family: "Inter-Bold", Helvetica;
    font-size: 66.6px;
    font-weight: 700;
    left: 592px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 121px;
    width: 734px;
  }
  
  .box .div {
    align-items: center;
    display: flex;
    gap: 46.65px;
    justify-content: center;
    left: 128px;
    position: absolute;
    top: 293px;
    width: 1665px;
  }
  
  .box .rectangle {
    height: 523.87px;
    position: relative;
    width: 523.87px;
  }
  
  .box .frame-22 {
    gap: 27.99px !important;
    left: 912px !important;
    position: absolute !important;
    top: 914px !important;
  }
  
  .box .frame-instance {
    border-radius: 6.66px !important;
    height: 13.33px !important;
    width: 13.33px !important;
  }
  </style>