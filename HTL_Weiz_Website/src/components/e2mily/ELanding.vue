<template>
  <div class="body hei uk-flex uk-flex-center uk-flex-middle uk-light" :style="{ backgroundImage: backgroundImage }" uk-height-viewport>
    <video v-if="videoPlaying || videoPaused" ref="video" class="video uk-background-cover uk-background-center-center" :muted="isMuted" @ended="onVideoEnded" src="https://a.dropoverapp.com/cloud/download/379f77aa-9ed9-427d-864b-5fc7d08fead4/dfafd14a-323b-4081-ae1d-91eaf369dafc"></video>
    <div class="uk-position-bottom-left uk-text-normal uk-padding gradient">
      <h2> E²MILY </h2>
      <p>Economic - Electromechanical Innovation Launched by Youngsters</p>
      <div class="icon-wrapper">
        <div class="icon-morph">
          <a v-if="!videoPlaying || videoPaused" class="si-play" @click="playVideo"></a>
          <a v-if="videoPlaying" class="si-pause" @click="pauseVideo"></a>
        </div>
        <a class="si-stop uk-margin-small-left" @click="stopVideo"></a>
        <a v-if="isMuted" class="si-volume-mute uk-margin-small-left" @click="toggleSound"></a>
        <a v-else class="si-volume-up uk-margin-small-left" @click="toggleSound"></a>
        <!-- <a class="si-fullscreen uk-margin-small-left" @click="toggleFullscreen"></a> -->
      </div>
      <div class="playintrovid">
        <a href="https://a.dropoverapp.com/cloud/download/379f77aa-9ed9-427d-864b-5fc7d08fead4/dfafd14a-323b-4081-ae1d-91eaf369dafc">Play Introduction Video</a>
      </div>
    </div>
  </div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/siimple-icons/siimple-icons.css" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ELanding',
  data() {
    return {
      isMuted: true,
      videoPlaying: false,
      videoPaused: false,
      backgroundImage: '',
    };
  },
  mounted() {
    this.setBackgroundImage(); // Set initial background image based on screen width
    window.addEventListener('resize', this.setBackgroundImage); // Update background image on window resize
  },
  beforeDestroy() { // Use 'beforeDestroy' instead of 'destroyed'
    window.removeEventListener('resize', this.setBackgroundImage); // Remove resize event listener on component destroy
  },
  methods: {
    setBackgroundImage() {
      if (window.innerWidth < 720) { // Example: Change image below 768px width (adjust as needed)
        this.backgroundImage = `url('/images/e2mily-landing-new-resized.png')`;
      } else {
        this.backgroundImage = `url('/images/e2mily-landing-new.png')`;
      }
    },
    playVideo() {
      this.videoPlaying = true;
      this.videoPaused = false;
      this.$nextTick(() => {
        const videoElement = this.$refs.video as HTMLVideoElement;
        videoElement.play();
      });
    },
    pauseVideo() {
      if (this.videoPaused == true) {
        this.playVideo();
      } else {
        const videoElement = this.$refs.video as HTMLVideoElement;
        videoElement.pause();
        this.videoPlaying = false;
        this.videoPaused = true;
      }
    },
    stopVideo() {
      const videoElement = this.$refs.video as HTMLVideoElement;
      videoElement.pause();
      videoElement.currentTime = 0;
      this.videoPlaying = false;
      this.videoPaused = false;
    },
    toggleSound() {
      this.isMuted = !this.isMuted;
      const videoElement = this.$refs.video as HTMLVideoElement;
      videoElement.muted = this.isMuted;
    },
    onVideoEnded() {
      this.videoPlaying = false;
      this.videoPaused = false;
    },
    toggleFullscreen() {
      const videoElement = this.$refs.video as HTMLVideoElement;
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if ((videoElement as any).webkitRequestFullscreen) { /* Safari */
        (videoElement as any).webkitRequestFullscreen();
      } else if ((videoElement as any).msRequestFullscreen) { /* IE11 */
        (videoElement as any).msRequestFullscreen();
      }
    }
  }
});
</script>

<style>
.hei {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.gradient {
  position: relative;
  z-index: 3; /* Ensure gradient content is in front of video */
  width: 100vw;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.icon-wrapper {
  display: flex;
  align-items: center;
}

.icon-morph {
  display: inline-block;
  width: 24px; /* Adjust to the size of your icons */
  height: 24px; /* Adjust to the size of your icons */
  position: relative;
}

.icon-morph a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2; /* Ensure video is in front of background image */
}

.hei {
  background-position: center;
}

@media (max-width: 640px) {
  .icon-wrapper {
    display: none;
  }
}

@media (min-width: 640px) {
  .playintrovid {
    display: none;
  }
}

.body {
  width: 100vw;
}
</style>
