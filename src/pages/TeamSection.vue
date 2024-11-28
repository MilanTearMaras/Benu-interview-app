<template>
  <section class="bg-white pb-[1.375rem]">
    <div class="max-w-[1440px] mx-auto flex flex-col text-left px-5 lg:px-[12.188rem] py-3 lg:py-[7rem] gap-[7rem]">
      <div class="flex flex-col gap-2.5">
        <h2 class="text-primary font-bold text-sm uppercase">Team</h2>
        <h3 class="text-dark text-2xl font-bold">Get Quality Education</h3>
        <p class="text-muted text-sm font-normal">
          Problems trying to resolve the conflict between<br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <MemberCard v-for="(member, index) in members" :key="index" :member-info="member" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MemberCard from "../components/teamComponents/MemberCard.vue";
import MemberOne from "../components/teamComponents/MemberOne.vue";
import MemberTwo from "../components/teamComponents/MemberTwo.vue";
import MemberThree from "../components/teamComponents/MemberThree.vue";
import MemberFour from "../components/teamComponents/MemberFour.vue";

const members = [
  {
    image: MemberOne,
    fullName: 'Julian Jameson',
    profession: 'Profession',
    facebook: '/',
    instagram: '/',
    twitter: '/',
  },
  {
    image: MemberTwo,
    fullName: 'Julian Jameson',
    profession: 'Profession',
    facebook: '/',
    instagram: '/',
    twitter: '/',
  },
  {
    image: MemberThree,
    fullName: 'Julian Jameson',
    profession: 'Profession',
    facebook: '/',
    instagram: '/',
    twitter: '/',
  },
  {
    image: MemberFour,
    fullName: 'Julian Jameson',
    profession: 'Profession',
    facebook: '/',
    instagram: '/',
    twitter: '/',
  },
]
</script>

<style scoped>

</style>