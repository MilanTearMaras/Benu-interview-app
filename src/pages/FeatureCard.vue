<template>
  <section class="bg-white pt-28 lg:pt-[10.875rem] pb-28 lg:pb-[12.813rem]">
    <div class="max-w-[1440px] mx-auto grid sm:grid-cols-2 gap-5 pl-5 lg:pl-[12.188rem] pr-5 lg:pr-[12.5rem]">
      <div class="flex flex-col gap-[2.188rem]">
        <div class="w-[94px] h-[7px] bg-red" />
        <h2 class="text-dark font-bold text-3xl sm:text-[2.5rem]">Approdable Packages</h2>
        <p class="text-sm text-normal text-muted max-w-lg mb-6">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: <br />
          Newtonian mechanics
        </p>
        <a href="/" class="group text-sm font-bold text-primary flex text-center gap-[0.625rem]">
          Learn more
          <span class="transition ease-in-out group-hover:translate-x-[5px] duration-300"><ChevronRight /></span>
        </a>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <PackageCard v-for="(card, index) in cards" :key="index" :card-text="card.text" :card-headline="card.headline">
          <template #card-image>
            <component :is="card.icon" />
          </template>
        </PackageCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ChevronRight from "../assets/chevron-right.vue";
import PackageCard from "../components/packagesComponents/PackageCard.vue";
import Blackboards from "../assets/blackboards.vue";
import Telescope from "../assets/telescope.vue";

const cards = [
  {
    icon: Blackboards,
    headline: 'Certified Teacher',
    text: `The gradual <br /> accumulation of <br /> information about`,
  },
  {
    icon: Telescope,
    headline: 'Expert Instruction',
    text: `The gradual <br /> accumulation of <br /> information about`,
  }
]
</script>

<style scoped>

</style>