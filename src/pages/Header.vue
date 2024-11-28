<template>
  <header class="bg-pink">
    <HeaderNavigation :header-links="headerLinks" />

    <div class="max-w-[1440px] mx-auto grid sm:grid-cols-2 items-center text-center sm:text-left">
      <div class="flex flex-col gap-[1.875rem] ml-5 lg:ml-[8.25rem]">
        <p class="text-base font-bold text-primary">Welcome</p>
        <h1 class="text-4xl lg:text-[3.625rem] lg:leading-[5rem] font-bold text-dark tracking-[0.013rem]">Best Learning Opportunities</h1>
        <p class="text-muted text-xl font-normal tracking-[0.013rem]">
          Our goal is to make online <br />
          education work for everyone.
        </p>
        <div class="flex gap-4 justify-evenly sm:justify-start">
          <button class="bg-primary text-white px-10 py-[0.938rem] rounded-[0.313rem] font-bold text-sm transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            Join Us
          </button>
          <button class="border border-primary text-primary px-10 py-[0.938rem] rounded-[0.313rem] font-bold text-sm transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img src="../assets/hero-cover-1.png" alt="Hero Cover">
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import HeaderNavigation from "../components/headerComponents/HeaderNavigation.vue";

const headerLinks = ["Home", "Product", "Pricing", "Contact"];
</script>

<style scoped>

</style>