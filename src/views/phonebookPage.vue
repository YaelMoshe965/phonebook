<template>
  <div class="phonebook-page">
    <phonebook-list :phonebook="phonebook" />
  </div>
</template>

<script>
import phonebookList from "@/components/phonebookList.vue";
import { phonebookService } from "../services/phonebookService.js";

export default {
  name: "phonebook-page",
  components: {
    phonebookList,
  },

  data() {
    return {
      phonebook: null,
    };
  },

  created() {
    phonebookService.query().then((phonebook) => {
      this.phonebook = phonebook;
    });
  },
};
</script>

<style lang="scss"></style>
