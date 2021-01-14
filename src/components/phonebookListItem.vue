<template>
  <tr class="phonebook-list-item">
    <td @click="openDetails(item.id)">{{ item.name }}</td>
    <td class="address">
      {{ item.address.street }}, {{ item.address.suite }},
      {{ item.address.city }}
    </td>
    <td>{{ item.phone }}</td>
  </tr>
</template>

<script>
export default {
  name: "phonebook-list-item",
  props: ["item"],

  methods: {
    openDetails(id) {
      this.$router.push(`/phonebookItem/${id}`);
    },
  },
};
</script>

