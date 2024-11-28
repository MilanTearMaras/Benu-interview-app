<template>
  <nav class="max-w-[1322px] mx-auto py-4 flex justify-between items-center">
    <div class="text-dark font-bold text-2xl tracking-[0.006rem] ml-5 lg:ml-[8.5rem]">Brandname</div>

    <button class="mr-5 lg:hidden text-dark focus:outline-none" @click="toggleMenu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

    <ul :class="['lg:flex gap-6 items-center', isMenuOpen ? 'block' : 'hidden', 'absolute lg:relative top-[64px] text-center lg:top-full lg:left-0 w-full lg:w-auto bg-white shadow-lg lg:shadow-none lg:bg-transparent py-4 lg:py-0']">
      <HeaderLink v-for="(link, index) in headerLinks" :key="index" :link-text="link" />
    </ul>

    <div class="hidden lg:flex items-center gap-4 mr-[13.75rem]">
      <button class="text-primary text-sm font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:underline">Login</button>
      <button class="bg-primary text-sm text-white px-[1.563rem] py-[0.938rem] rounded-[0.313rem] font-bold flex items-center gap-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        JOIN US
        <span><ArrowRight /></span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderLink from "./HeaderLink.vue";
import ArrowRight from "../../assets/arrow-right.vue";

defineProps({
  headerLinks: {
    type: Array,
    default: []
  }
})

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>

</style>