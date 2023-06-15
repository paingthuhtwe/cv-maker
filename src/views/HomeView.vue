<template>
  <div class="bg-slate-300">
    <nav class="py-5 w-11/12 mx-auto">
      <router-link to="/">Home</router-link> |
      <router-link to="/preview">General</router-link>
    </nav>
  </div>
  <FormPage></FormPage>
</template>

<script>
import FormPage from "../components/FormPage";
export default {
  components: {
    FormPage,
  },
};
</script>

<style>
</style>