<template>
  <div class="grid grid-cols-3 w-[760px] mx-auto">
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
          +959 780 909 574
        </p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700"
        >
          paingthuhtwe.official@gmail.com
        </p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700"
        >
          Zayya Waddy St, Sanchaung Tsp, Yangon.
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
        >
          Finished High School (2019-2020)
        </p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700 w-full"
        ></p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700 w-full"
        ></p>
      </div>
      <!-- end education section  -->
      <div class="p-3 mt-2">
        <h2 class="text-2xl font-semibold border-b-2 border-white text-sky-500">
          LANGUAGE
        </h2>
        <p
          contenteditable="true"
          class="text-white mt-3 text-sm font-medium hover:bg-slate-700 w-full"
        >
          English Intermediate Level
        </p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700 w-full"
        ></p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700 w-full"
        ></p>
      </div>
      <!-- end language section  -->
      <div class="p-3 mt-2">
        <h2 class="text-2xl font-semibold border-b-2 border-white text-sky-500">
          SKILLS
        </h2>
        <p
          contenteditable="true"
          class="text-white mt-3 text-sm font-medium hover:bg-slate-700 w-full"
        >
          - HTML, CSS
        </p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700 w-full"
        >
          - Bootstrap, Tailwind
        </p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700 w-full"
        >
          - JavaScript, Vuejs
        </p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700 w-full"
        >
          - PHP, Laravel
        </p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700 w-full"
        >
          - MySQL, Firebase
        </p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700 w-full"
        >
          - API & Git
        </p>
        <p
          contenteditable="true"
          class="text-white mt-2 text-sm font-medium hover:bg-slate-700 w-full"
        ></p>
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
          <p contenteditable="true" ref="name">Paing Thu Htwe</p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Father's Name</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" ref="fatherName">U Yae Chan</p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Date of Birth</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" ref="dateOfBirth">06/07/2004</p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Age</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" ref="age">19</p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>N.R.C No.</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" ref="nrcNo">8/YaSaKa(N)255979</p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Nationality</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" ref="nationality">Myanmar</p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Religion</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" ref="religion">Buddha</p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Marital Status</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" ref="maritalStatus">Single</p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Height</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" ref="height">5'6"</p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-3 font-medium">
        <div class="col-span-2"><p>Expected Salary</p></div>
        <div class="flex col-span-3">
          <p>: &nbsp;</p>
          <p contenteditable="true" ref="expectedSalary">Negotiate</p>
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
          <p contenteditable="true" class="hover:bg-slate-300 w-full">
            Documentation at ShweKabarLynn Electrical Engineering Co.,Ltd
            (Nov/2020 - Feb/2021)
          </p>
        </div>
        <div class="flex mt-2">
          <p>&nbsp;&nbsp;~&nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300 w-full"></p>
        </div>
        <div class="flex mt-2">
          <p>&nbsp;&nbsp;~&nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300 w-full"></p>
        </div>
        <div class="flex mt-2">
          <p>&nbsp;&nbsp;~&nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300 w-full"></p>
        </div>
        <div class="flex mt-2">
          <p>&nbsp;&nbsp;~&nbsp;</p>
          <p contenteditable="true" class="hover:bg-slate-300 w-full"></p>
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
          <div class="flex mt-4">
            <p>&nbsp;&nbsp;~&nbsp;</p>
            <p contenteditable="true" class="hover:bg-slate-300 w-full">
              Certificate in Professional Web Developer
            </p>
          </div>
          <div class="flex mt-2">
            <p>&nbsp;&nbsp;~&nbsp;</p>
            <p contenteditable="true" class="hover:bg-slate-300 w-full">
              Certificate in Vuejs + Firebase Course
            </p>
          </div>
          <div class="flex mt-2">
            <p>&nbsp;&nbsp;~&nbsp;</p>
            <p contenteditable="true" class="hover:bg-slate-300 w-full">
              Certificate in Programming Basic
            </p>
          </div>
          <div class="flex mt-2">
            <p>&nbsp;&nbsp;~&nbsp;</p>
            <p contenteditable="true" class="hover:bg-slate-300 w-full">
              Certificate in Computer Basic
            </p>
          </div>
          <div class="flex mt-2">
            <p>&nbsp;&nbsp;~&nbsp;</p>
            <p contenteditable="true" class="hover:bg-slate-300 w-full"></p>
          </div>
          <div class="flex mt-2">
            <p>&nbsp;&nbsp;~&nbsp;</p>
            <p contenteditable="true" class="hover:bg-slate-300 w-full"></p>
          </div>
          <div class="flex mt-2">
            <p>&nbsp;&nbsp;~&nbsp;</p>
            <p contenteditable="true" class="hover:bg-slate-300 w-full"></p>
          </div>
          <div class="flex mt-2">
            <p>&nbsp;&nbsp;~&nbsp;</p>
            <p contenteditable="true" class="hover:bg-slate-300 w-full"></p>
          </div>
          <div class="flex mt-2">
            <p>&nbsp;&nbsp;~&nbsp;</p>
            <p contenteditable="true" class="hover:bg-slate-300 w-full"></p>
          </div>
          <div class="flex mt-2">
            <p>&nbsp;&nbsp;~&nbsp;</p>
            <p contenteditable="true" class="hover:bg-slate-300 w-full"></p>
          </div>
        </div>
      </div>
      <!-- end qualifications section  -->
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    var name = ref();
    var fatherName = ref();
    var dateOfBirth = ref();
    var age = ref();
    var nrcNo = ref();
    var nationality = ref();
    var religion = ref();
    var maritalStatus = ref();
    var height = ref();
    var expectedSalary = ref();

    return {
      name,
      fatherName,
      dateOfBirth,
      age,
      nrcNo,
      nationality,
      religion,
      maritalStatus,
      height,
      expectedSalary,
    };
  },
};
</script>


<style>
</style>