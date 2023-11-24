<template>
    <div class="box">
      <div class="contact">
        <div class="frame">
          <img class="rectangle" alt="Rectangle" src="rectangle-12.png" />
          <div class="div">
            <div class="text-wrapper">KONTAKT</div>
            <p class="harald-macher">
              <span class="span">
                Harald Macher
                <br />
              </span>
              <span class="text-wrapper-2">
                <br />
                Telefonnummer: 93957382048
                <br />
                Email: macher@htlweiz.at
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .box {
    height: 1110px;
    width: 1920px;
  }
  
  .box .contact {
    background-color: var(--variable-collection-gray-background);
    height: 1110px;
    left: 0;
    position: fixed;
    top: 0;
    width: 1920px;
  }
  
  .box .frame {
    align-items: flex-start;
    display: flex;
    gap: 159.96px;
    height: 733px;
    left: 213px;
    position: relative;
    top: 189px;
    width: 1493px;
  }
  
  .box .rectangle {
    height: 733.15px;
    object-fit: cover;
    position: relative;
    width: 506.54px;
  }
  
  .box .div {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 70px;
    height: 733.15px;
    position: relative;
    width: 606.52px;
  }
  
  .box .text-wrapper {
    color: #000000;
    font-family: "Inter-Bold", Helvetica;
    font-size: 66.6px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1.33px;
    position: relative;
    text-align: center;
    width: 406.57px;
  }
  
  .box .harald-macher {
    color: #000000;
    font-family: "Inter-ExtraBold", Helvetica;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: 506.54px;
  }
  
  .box .span {
    font-weight: 800;
  }
  
  .box .text-wrapper-2 {
    font-family: "Inter-Regular", Helvetica;
    font-size: 24px;
  }
  </style>