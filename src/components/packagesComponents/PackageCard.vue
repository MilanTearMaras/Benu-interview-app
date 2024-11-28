<template>
  <div class="flex flex-col bg-white shadow-[0px_13px_19px_0px_#00000012] p-6 rounded-lg py-[2.188rem] px-[2.5rem] gap-5 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
    <div class="bg-primary py-[1.375rem] px-[1.188rem] rounded-[0.625rem] w-fit">
      <slot name="card-image"></slot>
    </div>
    <div class="w-[50px] h-[2px] bg-red" />
    <h3 class="text-dark text-base font-bold">{{ cardHeadline }}</h3>
    <p v-html="cardText" class="text-muted text-sm font-normal" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  cardHeadline: {
    type: String,
    default: ''
  },
  cardText: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>

</style>