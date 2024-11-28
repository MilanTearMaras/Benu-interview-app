<template>
  <li class="text-sm font-bold text-[#737373] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
    <a :href="linkHref">{{ linkText }}</a>
  </li>
</template>

<script setup lang="ts">
defineProps({
  linkText: {
    type: String,
    default: '',
  },
  linkHref: {
    type: String,
    default: '/'
  }
})
</script>

<style scoped>

</style>