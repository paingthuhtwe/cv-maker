<template>
  <div class="w-2/3 mx-auto mt-3">
    <form class="bg-white shadow-md rounded border p-4 mb-4">
      <div class="p-3 bg-sky-100 rounded-md mb-2">
        <h1 class="text-xl font-semibold mb-2">PROFILE</h1>
        <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
          <div class="mb-4">
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="text"
              ref="name"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-4">
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="text"
              ref="fatherName"
              placeholder="Father's Name"
            />
          </div>
        </div>
        <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
          <div class="mb-4">
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="text"
              ref="dateOfBirth"
              placeholder="Date of Birth"
            />
          </div>
          <div class="mb-4">
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="text"
              ref="nrcNo"
              placeholder="N.R.C No."
            />
          </div>
        </div>
        <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
          <div class="mb-4">
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="text"
              ref="nationality"
              placeholder="Nationality"
            />
          </div>
          <div class="mb-4">
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="text"
              ref="religion"
              placeholder="Religion"
            />
          </div>
        </div>
        <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
          <div class="mb-4">
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="text"
              ref="maritalStatus"
              placeholder="Marital Status"
            />
          </div>
          <div class="mb-4">
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="text"
              ref="height"
              placeholder="Height"
            />
          </div>
        </div>
        <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
          <div class="mb-1">
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="text"
              ref="expectedSalary"
              placeholder="Expected Salary"
            />
          </div>
        </div>
      </div>
      <div class="p-3 bg-sky-100 rounded-md mb-2">
        <h1 class="text-xl font-semibold mb-2">CONTACT</h1>
        <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
          <div class="mb-4">
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="text"
              ref="phone"
              placeholder="Phone No."
            />
          </div>
          <div class="mb-4">
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="text"
              ref="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="grid gird-cols-1 lg:grid-cols-2 gap-3">
          <div class="mb-4">
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="text"
              ref="address"
              placeholder="Address"
            />
          </div>
        </div>
      </div>
      <EducationForm></EducationForm>
      <SkillForm></SkillForm>
      <QualificationForm></QualificationForm>
      <LanguageForm></LanguageForm>
      <ExperienceForm></ExperienceForm>
      <button
        class="bg-sky-400 w-full py-[7px] rounded-md cursor-pointer hover:bg-sky-500"
      >
        Save Information
      </button>
    </form>
    <p class="text-center text-gray-500 text-xs my-10">
      &copy;2022 CV MAKER. All rights reserved.
    </p>
  </div>
</template>

<script>
import EducationForm from "./forms/EducationForm";
import SkillForm from "./forms/SkillForm";
import ExperienceForm from "./forms/ExperienceForm";
import LanguageForm from "./forms/LanguageForm";
import QualificationForm from "./forms/QualificationForm";
import { ref } from "vue";
export default {
  components: {
    EducationForm,
    SkillForm,
    ExperienceForm,
    LanguageForm,
    QualificationForm,
  },
  setup() {},
};
</script>

<style>
</style>