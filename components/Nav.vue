<template>
  <div
    :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
    class="md:absolute md:left-[52%] md:translate-x-[-50%] h-16 bg-white 
    md:w-[55vw] mx-auto text-[#001D4B] grid grid-cols-2  md:grid-cols-[1fr,6fr,1fr] 
    md:gap-1 sm:gap-[21rem] place-content-center sm:grid-cols-1
    place-items-center lg:px-5 md:px-0 dark:bg-slate-900 dark:text-white">
    <div><h5>{{ $t("logo") }}</h5></div>
    <div class=" gap-3 hidden lg:flex">
      <h5 class="hover:text-yellow-600 transition cursor-pointer">{{ $t("Become a host") }}</h5>
      <h5 class="hover:text-yellow-600 transition cursor-pointer">{{ $t("help") }}</h5>
      <h5 class="hover:text-yellow-600 transition cursor-pointer">{{ $t("signUp") }}</h5>
      <h5 class="hover:text-yellow-600 transition cursor-pointer">{{ $t("login") }}</h5>
    </div>
    <div class="container justify-center flex items-center gap-4">
      <div class="lg:hidden"><Menu /></div>
      <button class="w-7 h-7 rounded-full border-2 border-red-900" @click="changeLanguageEN">
        <p>{{ $t("translate") }}</p>
      </button>
      <label class="switch">
        <input type="checkbox" v-model="isDark" class="checkbox" />
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "./Icons/Menu.vue";
import { useDark } from "@vueuse/core";
import { useI18nUtils } from "../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
const lang = ref(locale);
const isDark = useDark();
</script>

<style scoped>
.container {
  
  
}
.switch {
  display: block;
  width: 50px;
  height: 20px;
  position: relative;
}

.checkbox {
  opacity: 0;
  height: 0;
  width: 0;
}

.slider {
  position: absolute;
  inset: 0;
  background-color: #aaa;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.5s ease-out;
}

.slider::before {
  position: absolute;
  content: "";
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  transform: translateX(0);
  transition: all 0.5s ease-out;
}

.checkbox:checked + .slider {
  background-color: green;
}

.checkbox:checked + .slider::before {
  transform: translateX(30px);
}
</style>
