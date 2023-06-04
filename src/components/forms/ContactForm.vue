<template>
  <div class="p-3 bg-sky-100 rounded-md mb-2">
    <h1 class="text-xl font-semibold mb-2">CONTACT</h1>
    <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
      <div class="mb-4">
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="phone"
          placeholder="Phone No."
        />
      </div>
      <div class="mb-4">
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="email"
          placeholder="Email"
        />
      </div>
    </div>
    <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
      <div class="mb-4">
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="address"
          placeholder="Address"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let phone = ref("");
    let email = ref("");
    let address = ref("");

    return { phone, email, address };
  },
};
</script>

<style>
</style>