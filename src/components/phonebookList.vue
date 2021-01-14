<template>
  <section class="phonebook-list">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th class="address">Address</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <phonebook-list-item
          v-for="item in phonebook"
          :item="item"
          :key="item.id"
        />
      </tbody>
    </table>
  </section>
</template>

<script>
import phonebookListItem from "./phonebookListItem.vue";

export default {
  name: "phonebook-list",
  props: ["phonebook"],

  components: {
    phonebookListItem,
  },
};
</script>

<style>
@media (max-width: 520px) {
  .address {
    display: none;
  }
}
</style>
