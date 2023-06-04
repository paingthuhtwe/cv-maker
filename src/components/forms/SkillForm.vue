<template>
  <div class="p-3 bg-sky-100 rounded-md mb-2">
    <h1 class="text-xl font-semibold mb-2">SKILLS</h1>
    <div v-if="skills">
      <div
        class="bg-red-200 rounded-md w-full my-2 px-3 py-2"
        v-for="skill in skills"
        :key="skill"
      >
        {{ skill }}
        <div
          class="float-right cursor-pointer px-1 hover:text-red-600"
          @click.prevent="removeSkill(skill)"
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
          v-model="skill"
          @keydown.enter="addSkill"
          placeholder="Enter your skills"
        />
      </div>
      <div class="mb-4">
        <button
          class="bg-blue-400 w-full py-[7px] px-3 rounded-md cursor-pointer hover:bg-blue-500"
          @click.prevent="addSkill"
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
    // for skill section
    let skill = ref("");
    let skills = ref([]);
    let addSkill = () => {
      if (skills.value.includes(skill.value) && skill.value.length > 0) {
        skill.value = "";
      } else if (skill.value.length > 0) {
        skills.value.push(skill.value);
        skill.value = "";
      }
    };
    let removeSkill = (skill) => {
      skills.value = skills.value.filter((data) => data != skill);
    };

    return {
      skill,
      skills,
      addSkill,
      removeSkill,
    };
  },
};
</script>

<style>
</style>