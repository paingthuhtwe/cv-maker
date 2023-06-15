<template>
  <div class="w-2/3 mx-auto mt-3">
    <form class="bg-white shadow-md rounded border p-4 mb-4">
      <ProfileForm></ProfileForm>
      <ContactForm></ContactForm>
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
import ContactForm from "./forms/ContactForm";
import ProfileForm from "./forms/ProfileForm";
import EducationForm from "./forms/EducationForm";
import SkillForm from "./forms/SkillForm";
import ExperienceForm from "./forms/ExperienceForm";
import LanguageForm from "./forms/LanguageForm";
import QualificationForm from "./forms/QualificationForm";
import { ref } from "vue";
export default {
  components: {
    ContactForm,
    ProfileForm,
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