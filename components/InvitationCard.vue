<template>
  <div
    id="mycanvas_2"
    class="container text-center"
    :style="{ 'background-image': `url(${backgroundImage})` }"
  >
    <p
      id="text-0"
      class="text-center pa-4"
      style="font-family: Eczar-Regular; color: rgb(166, 44, 53)"
    >
      || ॐ गणपतये नमः ||
    </p>
    <div>
      <p
        id="text-4"
        class="text-title text-color-light"
        style="font-family: Licorice"
      >
        Join us
      </p>
      <p
        id="text-7"
        style="font-family: BaskervilleBT-Roman"
      >
        TOGETHER WITH OUR LOVED<br />FRIENDS AND FAMILY<br />celebrating our
        wedding
      </p>
    </div>
    <div>
      <p id="text-3" class="text-name mt-name-1">Ankit</p>
      <p
        id="text-1"
        class="text-color-light"
        style="font-family: Licorice; font-size: 2rem"
      >
        and
      </p>
      <p id="text-2" class=" text-name">Marilyn</p>
    </div>

    <div class="mt-footer-msg">
        <p
        id="date-0"
        class="cursor-default"
        style="font-size: 1.2rem"
      >
        24th April, 24
      </p>
      <p
        id="address-0"
        class="cursor-default"

      >
        Hotel Imphal
      </p>
      <p
        id="text-6"
        class="cursor-default"
      >
        Imphal, Manipur
      </p>

   
    </div>
    <div class="mt-3">
      <p id="text-5" class="cursor-default" style="font-family: Licorice; font-size: 2rem">
        Its Happening!
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import inviteBg from '@/src/assets/img/inviteBg.jpg';

export default defineComponent({
  setup() {
    return {
      backgroundImage: inviteBg,
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 750px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.justify-content {
  justify-content: center;
}

.text-title {
  font-size: 2rem;
  font-weight: 400;
}
.mt-name-1 {
  margin-top: 70px;
}

.text-color-light {
  color: rgb(95, 95, 95);
}
.text-name {
  font-size: 5rem;
  font-family: Licorice;
  line-height: 80px;
  color: rgb(95, 95, 95);
}

.mt-footer-msg {
    margin-top: 160px;
    font-family: 'Source Code Pro';
    font-size: 1rem
}
</style>
