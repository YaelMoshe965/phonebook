<template>
  <section class="phonebook-item-details">
    <div class="container-title" v-if="phonebookItem">
      <h2>{{ phonebookItem.name }}</h2>
      <p>from {{ phonebookItem.company.name }}</p>
      <p>
        {{ phonebookItem.address.street }}, {{ phonebookItem.address.suite }},
        {{ phonebookItem.address.city }}, {{ phonebookItem.address.zipcode }}
      </p>
    </div>

    <div class="container-details" v-if="phonebookItem">
      <h2 class="flex justify-center">
        <i class="fas fa-user"></i>
        About
      </h2>
      <form class="user-details">
        <div class="username detail">
          <label class="block">Username</label>
          <input type="text" :value="phonebookItem.username" readonly />
        </div>
        <div class="phone detail">
          <label class="block">Phone</label>
          <input type="text" :value="phonebookItem.phone" readonly />
        </div>

        <div class="email detail">
          <label class="block">E-mail</label>
          <input type="text" :value="phonebookItem.email" readonly />
        </div>
        <div class="website detail">
          <label class="block">Website</label>
          <input type="text" :value="phonebookItem.website" readonly />
        </div>
      </form>

      <a href="#" @click="back"><i class="fa fa-arrow-left"></i> Back</a>
    </div>
  </section>
</template>

<script>
import { phonebookService } from "@/services/phonebookService.js";

export default {
  name: "phonebook-item-details",

  data() {
    return {
      phonebookItemId: null,
      phonebookItem: null,
    };
  },

  methods: {
    back() {
      this.$router.push("/");
    },
  },

  created() {
    this.phonebookItemId = this.$route.params.id;
    phonebookService.getById(this.phonebookItemId).then((phonebookItem) => {
      this.phonebookItem = phonebookItem;
    });
  },
};
</script>

<style>
.flex {
  display: flex;
}

.block {
  display: block;
}

.justify-center {
  justify-content: center;
}

.user-details {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
}

@media (max-width: 520px) {
  .user-details {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
}
</style>
