<template>
  <div class="p-3 bg-sky-100 rounded-md mb-2">
    <h1 class="text-xl font-semibold mb-2">EXPERIENCE</h1>
    <div v-if="experiences">
      <div
        class="bg-red-200 rounded-md w-full my-2 px-3 py-2"
        v-for="experience in experiences"
        :key="experience"
      >
        {{ experience }}
        <div
          class="float-right cursor-pointer px-1 hover:text-red-600"
          @click.prevent="removeExperience(experience)"
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
          v-model="experience"
          @keydown.enter="addExperience"
          placeholder="Enter your experiences"
        />
      </div>
      <div class="mb-4">
        <button
          class="bg-blue-400 w-full py-[7px] px-3 rounded-md cursor-pointer hover:bg-blue-500"
          @click.prevent="addExperience"
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
    // for experience section
    let experience = ref("");
    let experiences = ref([]);
    let addExperience = () => {
      if (
        experiences.value.includes(experience.value) &&
        experience.value.length > 0
      ) {
        experience.value = "";
      } else if (experience.value.length > 0) {
        experiences.value.push(experience.value);
        experience.value = "";
      }
    };
    let removeExperience = (experience) => {
      experiences.value = experiences.value.filter(
        (data) => data != experience
      );
    };

    return {
      experience,
      experiences,
      addExperience,
      removeExperience,
    };
  },
};
</script>

<style>
</style>