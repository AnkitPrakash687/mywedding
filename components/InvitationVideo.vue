<template>
  <div>
    <img
      v-if="displayGif"
      height="500"
      width="350"
      src="@/public/assets/invitation.gif"
    />
  </div>
</template>

<script>
import InvitationVideo from '@/public/assets/invitationVideo.mp4';

export default {
  mounted() {
    this.displayGif = true;
  },
  data() {
    return {
      InvitationVideo,
      displayGif: false,
    };
  },
};
</script>

<style></style>
