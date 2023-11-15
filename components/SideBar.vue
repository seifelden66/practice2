<template>
  <div>
    <aside>
      <transition
        enter-to-class="animate__animated animate__slideInLeft"
        ,
        leave-to-class="animate__animated animate__slideOutLeft"
      >
        <div
          ref="target"
          class="side dark:bg-slate-900 dark:text-gray-100 bg-gray-100 text-black"
          v-show="side"
        >
          <button
            class="lg:hidden h-7 w-7 rounded-full flex text-red-900 hover:text-black hover:bg-red-900 transition justify-center items-center border-2 cursor-pointer border-red-900"
            @click="close"
          >
            x
          </button>
          <div class="gap-4 flex flex-col mt-5 lg:flex">
            <h4 class="hover:text-yellow-600 transition cursor-pointer">
              {{ $t("Become a host") }}
            </h4>
            <h4 class="hover:text-yellow-600 transition cursor-pointer">
              {{ $t("help") }}
            </h4>
            <h4 class="hover:text-yellow-600 transition cursor-pointer">
              {{ $t("signUp") }}
            </h4>
            <h4 class="hover:text-yellow-600 transition cursor-pointer">
              {{ $t("login") }}
            </h4>
          </div>
        </div>
      </transition>
    </aside>
  </div>
</template>
<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
const target = ref(null);

onClickOutside(target, close);
</script>
<style lang="scss" scoped>
.animate__animated.animate__slideInLeft,
.animate__animated.animate__slideOutLeft {
  animation-duration: 600ms;
}
.side {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 270px;
  z-index: 999;
  padding: 0.75em;
}
</style>
