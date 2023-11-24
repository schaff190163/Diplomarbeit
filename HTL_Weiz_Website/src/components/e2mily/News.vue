<template>
    <div class="box">
      <div class="news">
        <div class="overlap-group">
          <div class="text-wrapper">NEWS</div>
          <div class="group">
            <img class="rectangle" alt="Rectangle" src="rectangle-9.png" />
            <div class="div">
              <div class="frame-2">
                <p class="element">
                  <span class="span">11.11.2011</span>
                  <span class="text-wrapper-2">&nbsp;</span>
                </p>
                <p class="e-mily-GT-im">
                  E²MILY - GT <br />
                  IM GREENROOM DES PROJECT 1
                </p>
              </div>
              <p class="im-green-room-von">
                <span class="text-wrapper-3">
                  Im Green Room von Project 1 konnten die Besucher:innen auf dem Red Bull Ring zwei innovative und
                  nachhaltige Projekte im Bereich Motorsport unter die Lupe nehmen. <br />
                  <br />
                  Eines davon war unser E-Kart E2MILY-GT. Daneben präsentierte Project 1 das „inklusive eKart“, das mit
                  dem System SpaceDrive II und Steuerelementen von Paravan ausgestattet ist. <br />
                  <br />
                  Die Fahr- und Lenkbefehle werden elektrisch über einen zwei- oder vier-wege Joystick übertragen.
                  <br />
                  <br />
                </span>
                <span class="text-wrapper-4">
                  Mehr Lesen
                  <br />
                </span>
              </p>
            </div>
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
  import Frame from './Frame.vue';
  
  export default {
    name: 'Box',
    components: {
      Frame
    }
  };
  </script>
  
  <style>
  .box {
    height: 1168px;
    width: 1920px;
  }
  
  .box .news {
    height: 1168px;
    left: 0;
    position: fixed;
    top: 0;
    width: 1922px;
  }
  
  .box .overlap-group {
    background-color: var(--variable-collection-gray-background);
    height: 1168px;
    position: relative;
    width: 1920px;
  }
  
  .box .text-wrapper {
    color: #000000;
    font-family: "Inter-Bold", Helvetica;
    font-size: 66.6px;
    font-weight: 700;
    left: 592px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 104px;
    width: 734px;
  }
  
  .box .group {
    height: 704px;
    left: 207px;
    position: absolute;
    top: 260px;
    width: 1493px;
  }
  
  .box .rectangle {
    height: 704px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 733px;
  }
  
  .box .div {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 38.66px;
    height: 704px;
    left: 766px;
    position: absolute;
    top: 0;
    width: 726px;
  }
  
  .box .frame-2 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 17.33px;
    position: relative;
  }
  
  .box .element {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1.33px;
    position: relative;
    width: 599px;
  }
  
  .box .span {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0;
  }
  
  .box .text-wrapper-2 {
    font-family: "Inter-Bold", Helvetica;
    font-size: 42.7px;
    font-weight: 700;
  }
  
  .box .e-mily-GT-im {
    color: #000000;
    font-family: "Inter-Bold", Helvetica;
    font-size: 42.7px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: 599.85px;
  }
  
  .box .im-green-room-von {
    color: transparent;
    font-family: "Inter-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: 606.52px;
  }
  
  .box .text-wrapper-3 {
    color: #000000;
  }
  
  .box .text-wrapper-4 {
    color: #0e80b1;
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 600;
  }
  
  .box .frame-22 {
    gap: 27.99px !important;
    left: 900px !important;
    position: absolute !important;
    top: 1045px !important;
  }
  
  .box .frame-instance {
    background-color: var(--variable-collection-dark-gray) !important;
    border-radius: 6.66px !important;
    height: 13.33px !important;
    width: 13.33px !important;
  }
  </style>