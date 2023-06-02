<template>
  <div class="grid grid-cols-3 w-[760px] mx-auto" v-if="user">
    <div class="bg-slate-600 h-[1123px]">
      <img
        class="w-full px-8 py-10"
        src="@/assets/images/CV_03.jpg"
        alt="Profile Image"
      />
      <div class="bg-sky-500 h-10 w-full"></div>
      <div class="p-3 mt-3">
        <h2 class="text-2xl font-semibold border-b-2 border-white text-sky-500">
          CONTACT
        </h2>
        <p
          contenteditable="true"
          class="text-white mt-3 text-sm font-medium hover:bg-slate-700"
        >
          {{ user.phone }}
        </p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700"
        >
          {{ user.email }}
        </p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700"
        >
          {{ user.address }}
        </p>
      </div>
      <!-- end contact section  -->
      <div class="p-3 mt-2">
        <h2 class="text-2xl font-semibold border-b-2 border-white text-sky-500">
          EDUCATION
        </h2>
        <p
          contenteditable="true"
          class="text-white mt-3 text-sm font-medium hover:bg-slate-700 w-full"
          v-for="education in user.educations"
          :key="education"
        >
          {{ education }}
        </p>
      </div>
      <!-- end education section  -->
      <div class="p-3 mt-2">
        <h2 class="text-2xl font-semibold border-b-2 border-white text-sky-500">
          LANGUAGE
        </h2>
        <p
          contenteditable="true"
          class="text-white mt-3 text-sm font-medium hover:bg-slate-700 w-full"
          v-for="language in user.languages"
          :key="language"
        >
          {{ language }}
        </p>
      </div>
      <!-- end language section  -->
      <div class="p-3 mt-2">
        <h2 class="text-2xl font-semibold border-b-2 border-white text-sky-500">
          SKILLS
        </h2>
        <p
          contenteditable="true"
          class="text-white mt-3 text-sm font-medium hover:bg-slate-700 w-full"
          v-for="skill in user.skills"
          :key="skill"
        >
          - {{ skill }}
        </p>
      </div>
      <!-- end skills section  -->
    </div>
    <!-- end left section  -->
    <div class="bg-slate-200 h-[1123px] col-span-2 p-5">
      <h2
        class="text-2xl font-semibold border-b-2 border-slate-600 text-sky-600"
      >
        PROFILE
      </h2>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Name</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300">
            {{ user.name }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Father's Name</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300">
            {{ user.fatherName }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Date of Birth</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300">
            {{ user.dateOfBirth }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Age</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300">
            {{ user.age }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>N.R.C No.</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300">
            {{ user.nrcNo }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Nationality</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300">
            {{ user.nationality }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Religion</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300">
            {{ user.religion }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Marital Status</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300">
            {{ user.maritalStatus }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Height</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300">
            {{ user.height }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Expected Salary</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300">
            {{ user.expectedSalary }}
          </p>
        </div>
      </div>
      <!-- end profile section  -->
      <div class="mt-8">
        <h2
          class="text-2xl font-semibold border-b-2 border-slate-600 text-sky-600"
        >
          WORK EXPERIENCE
        </h2>
        <div class="flex mt-4">
          <p>&nbsp;&nbsp;~&nbsp;</p>
          <p
            contenteditable="true"
            class="hover:bg-slate-300 w-full"
            v-for="experience in user.experiences"
            :key="experience"
          >
            {{ experience }}
          </p>
        </div>
      </div>
      <!-- end experience section -->
      <div class="mt-8">
        <h2
          class="text-2xl font-semibold border-b-2 border-slate-600 text-sky-600"
        >
          OTHER CERTIFICATE
        </h2>
        <div class="mt-3">
          <div
            class="flex mt-4"
            v-for="qualification in user.qualifications"
            :key="qualification"
          >
            <p>&nbsp;&nbsp;~&nbsp;</p>
            <p contenteditable="true" class="hover:bg-slate-300 w-full">
              {{ qualification }}
            </p>
          </div>
        </div>
      </div>
      <!-- end qualifications section  -->
    </div>
  </div>
</template>

<script>
import getUser from "@/composables/getUser";

export default {
  setup() {
    let { user, load } = getUser();
    load();
    return { user };
  },
};
</script>


<style>
</style>