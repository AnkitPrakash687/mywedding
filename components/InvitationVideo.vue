<template>
  <div @click="handleClickVideo">
    <video
      id="vid"
      width="350"
      height="500"
      autoplay
      muted
      playsinline
      class="video-background"
    >
      <source :src="InvitationVideo" type="video/mp4" />
    </video>
  </div>
  <div></div>
</template>

<script>
import InvitationVideo from '@/public/assets/invitationVideo.mp4';

import InvitationGif from '@/public/assets/invitation.gif';
export default {
  mounted() {
    document.getElementById('vid').play();
  },
  methods: {
    handleClickVideo() {
      document.getElementById('vid').play();
    },
  },
  data() {
    return {
      InvitationVideo,
      InvitationGif,
    };
  },
};
</script>

<style></style>
