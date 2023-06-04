<template>
  <div class="p-3 bg-sky-100 rounded-md mb-2">
    <h1 class="text-xl font-semibold mb-2">LANGUAGES</h1>
    <div v-if="languages">
      <div
        class="bg-red-200 rounded-md w-full my-2 px-3 py-2"
        v-for="language in languages"
        :key="language"
      >
        {{ language }}
        <div
          class="float-right cursor-pointer px-1 hover:text-red-600"
          @click.prevent="removeLanguage(language)"
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
          v-model="language"
          @keydown.enter="addLanguage"
          placeholder="Enter your languages"
        />
      </div>
      <div class="mb-4">
        <button
          class="bg-blue-400 w-full py-[7px] px-3 rounded-md cursor-pointer hover:bg-blue-500"
          @click.prevent="addLanguage"
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
    // for language section
    let language = ref("");
    let languages = ref([]);
    let addLanguage = () => {
      if (
        languages.value.includes(language.value) &&
        language.value.length > 0
      ) {
        language.value = "";
      } else if (language.value.length > 0) {
        languages.value.push(language.value);
        language.value = "";
      }
    };
    let removeLanguage = (language) => {
      languages.value = languages.value.filter((data) => data != language);
    };

    return {
      language,
      languages,
      addLanguage,
      removeLanguage,
    };
  },
};
</script>

<style>
</style>