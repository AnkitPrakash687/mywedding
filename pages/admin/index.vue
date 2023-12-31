<template>
  <v-container>
    <v-data-table :items="tableData.value"></v-data-table>

    <v-menu
      v-model="vm.isOpenAddMenu"
      location="end"
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ props }">
        <v-btn icon="$plus" color="green" v-bind="props"> </v-btn>
      </template>
      <v-card
        min-width="300"
        class="pa-0 ml-4"
        elevation="1"
        color=""
        style="overflow: hidden"
      >
        <v-btn
          icon="$close"
          size="30"
          slim
          class="pa-1"
          variant="text"
          style="float: right"
          @click="handleCloseMenu"
        ></v-btn>
        <v-form class="pa-4">
          <v-row justify="center" class="ma-0">
            <v-col cols="10" class="pa-0">
              <v-text-field
                label="name"
                density="compact"
                @input="handleInputName"
                variant="underlined"
              >
              </v-text-field>
            </v-col>
            <v-col cols="10" class="pa-0">
              <v-text-field
                label="phoneNumber"
                density="compact"
                @input="handleInputPhoneNumber"
                variant="underlined"
              ></v-text-field>
            </v-col>
            <v-col cols="10" class="pa-0">
              <v-text-field
                label="email"
                density="compact"
                @input="handleInputEmail"
                variant="underlined"
              ></v-text-field>
            </v-col>
            <v-row class="ml-1">
              <v-btn
                color="green"
                slim
                variant="text"
                @click="handleClickCreate"
                ><span class="text-caption">Create</span></v-btn
              >
            </v-row>
          </v-row>
        </v-form>
      </v-card>
    </v-menu>
  </v-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { ref, reactive } from 'vue';

export default defineComponent({
  async setup() {

    const vm = reactive({
      name: "",
      phoneNumber: "",
      email: "",
      isOpenAddMenu: false
    })

    const tableData = ref([])
    const fetchGuestList = async () => {
      const { data } = await useFetch('/api/guest/list');
      tableData.value = data;
    }


   await fetchGuestList();
  


    //const excelService = new ExcelService();
    const handleClickCreate = async () => {
      console.log(vm);
      const { data: responseData} = await useFetch('/api/guest/add', {
        method: "POST",
        body: {
          name: vm.name,
          phoneNumber: vm.phoneNumber,
          email: vm.email
        }
      });
      await fetchGuestList();
      console.log(responseData);
    };

    const handleInputName = (e) => {
      vm.name = e.target.value;
    };

    const handleInputPhoneNumber = (e) => {
      vm.phoneNumber = e.target.value;
    };
    const handleInputEmail = (e) => {
      vm.email = e.target.value;
    };
    const handleCloseMenu = () => {
      vm.isOpenAddMenu = false;
    };



    return {
      vm,
      tableData,
      handleClickCreate,
      handleInputName,
      handleCloseMenu,
      handleInputPhoneNumber,
      handleInputEmail
    };
  },
});
</script>

<style></style>
