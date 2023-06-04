<template>
  <div class="p-3 bg-sky-100 rounded-md mb-2">
    <h1 class="text-xl font-semibold mb-2">QUALIFICATIONS</h1>
    <div v-if="qualifications">
      <div
        class="bg-red-200 rounded-md w-full my-2 px-3 py-2"
        v-for="qualification in qualifications"
        :key="qualification"
      >
        {{ qualification }}
        <div
          class="float-right cursor-pointer px-1 hover:text-red-600"
          @click.prevent="removeQualification(qualification)"
        >
          X
        </div>
      </div>
    </div>
    <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
      <div class="mb-4">
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="qualification"
          @keydown.enter="addQualification"
          placeholder="Enter your qualifications"
        />
      </div>
      <div class="mb-4">
        <button
          class="bg-blue-400 w-full py-[7px] px-3 rounded-md cursor-pointer hover:bg-blue-500"
          @click.prevent="addQualification"
        >
          + Add Item
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    // for qualification section
    let qualification = ref("");
    let qualifications = ref([]);
    let addQualification = () => {
      if (
        qualifications.value.includes(qualification.value) &&
        qualification.value.length > 0
      ) {
        qualification.value = "";
      } else if (qualification.value.length > 0) {
        qualifications.value.push(qualification.value);
        qualification.value = "";
      }
    };
    let removeQualification = (qualification) => {
      qualifications.value = qualifications.value.filter(
        (data) => data != qualification
      );
    };

    return {
      qualification,
      qualifications,
      addQualification,
      removeQualification,
    };
  },
};
</script>

<style>
</style>