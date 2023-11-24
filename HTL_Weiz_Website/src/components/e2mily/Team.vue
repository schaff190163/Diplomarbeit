<template>
    <div class="box">
      <div class="team">
        <div class="overlap-group">
          <div class="frame-wrapper">
            <div class="div">
              <div class="frame-2">
                <div class="rectangle" />
                <div class="frame-3">
                  <div class="max-mustermann">MAX MUSTERMANN</div>
                  <div class="element">5AHET</div>
                </div>
              </div>
              <div class="frame-4">
                <div class="rectangle" />
                <div class="frame-5">
                  <div class="herbert-steiner">HERBERT STEINER</div>
                  <div class="text-wrapper">5AHET</div>
                </div>
              </div>
              <div class="frame-6">
                <div class="rectangle" />
                <p class="harry-potter">
                  <span class="span">Harry Potter, </span>
                  <span class="text-wrapper-2">5AHET</span>
                </p>
              </div>
            </div>
          </div>
          <Frame
            class="frame-22"
            div-class-name="frame-instance"
            ellipse-class-name="frame-instance"
            ellipse-class-name-override="frame-instance"
          />
          <div class="unser-team">UNSER TEAM</div>
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
  
  .box .team {
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
  
  .box .frame-wrapper {
    align-items: center;
    display: inline-flex;
    gap: 81.31px;
    height: 636px;
    justify-content: center;
    left: 213px;
    position: absolute;
    top: 281px;
  }
  
  .box .div {
    align-items: flex-start;
    display: flex;
    gap: 177.29px;
    position: relative;
    width: 1492.96px;
  }
  
  .box .frame-2 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }
  
  .box .rectangle {
    background-color: #c9c9c9;
    height: 523.87px;
    position: relative;
    width: 378.57px;
  }
  
  .box .frame-3 {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 9.33px;
    justify-content: center;
    position: relative;
    width: 379.9px;
  }
  
  .box .max-mustermann {
    color: #ffffff;
    font-family: "Inter-Bold", Helvetica;
    font-size: 33.3px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1.33px;
    position: relative;
    width: fit-content;
  }
  
  .box .element {
    color: #ffffff;
    font-family: "Inter-Regular", Helvetica;
    font-size: 26.7px;
    font-weight: 400;
    letter-spacing: 7.46px;
    line-height: normal;
    position: relative;
    text-align: center;
    width: fit-content;
  }
  
  .box .frame-4 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 25.33px;
    position: relative;
    width: 379.9px;
  }
  
  .box .frame-5 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 17.33px;
    justify-content: center;
    position: relative;
  }
  
  .box .herbert-steiner {
    color: #ffffff;
    font-family: "Inter-Bold", Helvetica;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1.33px;
    position: relative;
    width: fit-content;
  }
  
  .box .text-wrapper {
    color: #ffffff;
    font-family: "Inter-Regular", Helvetica;
    font-size: 21.3px;
    font-weight: 400;
    height: 23.99px;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: 70.65px;
  }
  
  .box .frame-6 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 25.33px;
    margin-right: -1.33px;
    position: relative;
  }
  
  .box .harry-potter {
    color: #ffffff;
    font-family: "Inter-Bold", Helvetica;
    font-size: 26.7px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: 379.9px;
  }
  
  .box .span {
    font-weight: 700;
  }
  
  .box .text-wrapper-2 {
    font-family: "Inter-Regular", Helvetica;
  }
  
  .box .frame-22 {
    gap: 27.99px !important;
    left: 900px !important;
    position: absolute !important;
    top: 996px !important;
  }
  
  .box .frame-instance {
    border-radius: 6.66px !important;
    height: 13.33px !important;
    width: 13.33px !important;
  }
  
  .box .unser-team {
    color: #fffdfd;
    font-family: "Inter-Bold", Helvetica;
    font-size: 66.6px;
    font-weight: 700;
    left: 593px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 99px;
    width: 734px;
  }
  </style>