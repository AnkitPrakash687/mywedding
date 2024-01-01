<template>
  <div>
    <v-container style="max-width: 350px">
      <v-row justify="end">
        <v-col cols="3">
          <v-btn variant="outlined" slim color="#00bfa5">
           <div class="text-caption font-weight-bold">RSVP</div> 
        </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn variant="outlined" slim color="#fb8c00">
            <div  class="text-caption font-weight-bold">Gift Us</div> 
        </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <invitation-video />
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import InvitationVideo from '~/components/InvitationVideo.vue';

export default defineComponent({
  components: { InvitationVideo },
  setup() {
    const data = reactive({ user: {} });
    //data.user = useState('user').value[0];
    return {
      data,
    };
  },
});
</script>
<style scoped>
.invite-card {
  display: flex;
  justify-content: center;
}

.nav-button {
    text-decoration: none;
}
</style>
