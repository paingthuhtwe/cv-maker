<template>
  <div class="p-3 bg-sky-100 rounded-md mb-2">
    <h1 class="text-xl font-semibold mb-2">PROFILE</h1>
    <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
      <div class="mb-4">
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="name"
          placeholder="Full Name"
        />
      </div>
      <div class="mb-4">
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="fatherName"
          placeholder="Father's Name"
        />
      </div>
    </div>
    <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
      <div class="mb-4">
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="dateOfBirth"
          placeholder="Date of Birth"
        />
      </div>
      <div class="mb-4">
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="nrcNo"
          placeholder="N.R.C No."
        />
      </div>
    </div>
    <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
      <div class="mb-4">
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="nationality"
          placeholder="Nationality"
        />
      </div>
      <div class="mb-4">
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="religion"
          placeholder="Religion"
        />
      </div>
    </div>
    <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
      <div class="mb-4">
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="maritalStatus"
          placeholder="Marital Status"
        />
      </div>
      <div class="mb-4">
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="height"
          placeholder="Height"
        />
      </div>
    </div>
    <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
      <div class="mb-1">
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="expectedSalary"
          placeholder="Expected Salary"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let name = ref("");
    let fatherName = ref("");
    let dateOfBirth = ref("");
    let nrcNo = ref("");
    let nationality = ref("");
    let religion = ref("");
    let height = ref("");
    let expectedSalary = ref("");

    return {
      name,
      fatherName,
      dateOfBirth,
      nrcNo,
      nationality,
      religion,
      height,
      expectedSalary,
    };
  },
};
</script>

<style>
</style>