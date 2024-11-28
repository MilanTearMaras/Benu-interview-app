<template>
  <div class="bg-white shadow-[0px_13px_19px_0px_#00000012] rounded-[1.25rem] text-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
    <component :is="memberInfo.image" class="rounded-t-[1.25rem]" />
    <div class="p-[1.875rem] flex flex-col gap-2.5">
      <h4 class="text-[#252B42] font-bold">{{ memberInfo.fullName }}</h4>
      <p class="text-[#737373] text-sm">{{ memberInfo.profession }}</p>
      <div class="flex justify-evenly">
        <a :href="memberInfo.facebook">
          <Facebook />
        </a>
        <a :href="memberInfo.instagram">
          <Instagram />
        </a>
        <a :href="memberInfo.twitter">
          <Twitter />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Facebook from "../../assets/facebook.vue";
import Instagram from "../../assets/instagram.vue";
import Twitter from "../../assets/twitter.vue";

defineProps({
  memberInfo: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped>

</style>