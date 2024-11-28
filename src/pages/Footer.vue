<template>
  <footer class="bg-white">
    <div class="max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 py-[3.125rem] px-5 lg:px-[12.188rem]">
      <div v-for="(column, index) in footerColumns" :key="index">
        <h4 class="text-dark font-bold text-base mb-5">{{ column.header }}</h4>
        <ul class="space-y-[0.625rem]">
          <li v-for="(link, i) in column.links" :key="i" class="text-sm text-muted font-bold">
            <a :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-dark font-bold text-base mb-5">Get In Touch</h4>
        <ul class="space-y-[0.625rem]">
          <li class="text-sm text-muted font-bold">
            <a href="tel:(480) 555-0103" class="flex flex-nowrap"><Contact /><span class="ml-[0.625rem]">(480) 555-0103</span></a>
          </li>
          <li class="flex flex-nowrap text-sm text-muted font-bold">
            <Location /><span class="ml-[0.625rem]">4517 Washington Ave. Manchester, Kentucky 39495</span>
          </li>
          <li class="text-sm text-muted font-bold">
            <a href="mailto:debra.holt@example.com" class="flex flex-nowrap"><Email /><span class="ml-[0.625rem]">debra.holt@example.com</span></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="max-w-[1440px] mx-auto bg-gray px-5 lg:px-[12.188rem] py-[1.563rem] flex justify-between">
      <p class="text-muted text-sm font-bold">Made With Love By Figmaland All Right Reserved</p>
      <div class="flex space-x-[1.25rem]">
        <a href="/"><Facebook /></a>
        <a href="/"><Instagram /></a>
        <a href="/"><Twitter /></a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Contact from "../assets/contact.vue";
import Location from "../assets/location.vue";
import Email from "../assets/email.vue";
import Facebook from "../assets/facebook.vue";
import Instagram from "../assets/instagram.vue";
import Twitter from "../assets/twitter.vue";

const footerColumns = [
  {
    header: "Company Info",
    links: [
      { text: "About Us", href: "/" },
      { text: "Carrier", href: "/" },
      { text: "We Are Hiring", href: "/" },
      { text: "Blog", href: "/" },
    ]
  },
  {
    header: "Legal",
    links: [
      { text: "About Us", href: "/" },
      { text: "Carrier", href: "/" },
      { text: "We Are Hiring", href: "/" },
      { text: "Blog", href: "/" },
    ]
  },
  {
    header: "Feature",
    links: [
      { text: "Business Marketing", href: "/" },
      { text: "User Analytics", href: "/" },
      { text: "Live Chat", href: "/" },
      { text: "Unlimited Support", href: "/" },
    ]
  },
  {
    header: "Resources",
    links: [
      { text: "iOS & Android", href: "/" },
      { text: "Watch a Demo", href: "/" },
      { text: "Customers", href: "/" },
      { text: "API", href: "/" },
    ]
  },
]
</script>

<style scoped>

</style>