<template>
  <div class="p-3 bg-sky-100 rounded-md mb-2">
    <h1 class="text-xl font-semibold mb-2">EDUCATION</h1>
    <div v-if="educations">
      <div
        class="bg-red-200 rounded-md w-full my-2 px-3 py-2"
        v-for="education in educations"
        :key="education"
      >
        {{ education }}
        <div
          class="float-right cursor-pointer px-1 hover:text-red-600"
          @click.prevent="removeEducation(education)"
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
          v-model="education"
          @keydown.enter="addEducation"
          placeholder="Enter your educations"
        />
      </div>
      <div class="mb-4">
        <button
          class="bg-blue-400 w-full py-[7px] px-3 rounded-md cursor-pointer hover:bg-blue-500"
          @click.prevent="addEducation"
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
    // for education section
    let education = ref("");
    let educations = ref([]);
    let addEducation = () => {
      if (
        educations.value.includes(education.value) &&
        education.value.length > 0
      ) {
        education.value = "";
      } else if (education.value.length > 0) {
        educations.value.push(education.value);
        education.value = "";
      }
    };
    let removeEducation = (education) => {
      educations.value = educations.value.filter((data) => data != education);
    };

    return {
      education,
      educations,
      addEducation,
      removeEducation,
    };
  },
};
</script>

<style>
</style>