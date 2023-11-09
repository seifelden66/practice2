<template>
  <div
    class="md:absolute md:left-[52%] md:translate-x-[-50%] h-8 bg-white md:w-[55vw] mx-auto text-[#001D4B] flex items-center"
  >
    <div><h5>LOGO</h5></div>
    <div class="ml-auto gap-7 hidden md:flex">
      <h5 class="hover:text-yellow-600 transition cursor-pointer">Become a host</h5>
      <h5 class="hover:text-yellow-600 transition cursor-pointer">Help</h5>
      <h5 class="hover:text-yellow-600 transition cursor-pointer">Signup</h5>
      <h5 class="hover:text-yellow-600 transition cursor-pointer">Login</h5>
    </div>
    <div class="block md:hidden ml-auto">
      <Menu />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "./Icons/Menu.vue";
</script>
