<template>
  <div
    :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
    class="bg-gray-100 text-slate-950 dark:bg-slate-900 dark:text-white h-16 w-full flex 
    items-center justify-between px-16 md:px-0 md:justify-center md:gap-[17rem] lg:gap-32 sm:gap-[6.2rem]"
  >
    <div>
      <h1>{{ $t("logo") }}</h1>
    </div>
    <div class="gap-4 hidden lg:flex">
      <h4 class="hover:text-yellow-600 transition cursor-pointer">
        {{ $t("Become a host") }}
      </h4>
      <h4 class="hover:text-yellow-600 transition cursor-pointer">{{ $t("help") }}</h4>
      <h4 class="hover:text-yellow-600 transition cursor-pointer">{{ $t("signUp") }}</h4>
      <h4 class="hover:text-yellow-600 transition cursor-pointer">{{ $t("login") }}</h4>
    </div>
    <div class="justify-center flex items-center gap-4">
      <div class="flex items-center gap-2">
        <div class="lg:hidden h-7 w-7 rounded-full flex justify-center items-center
        border-2 cursor-pointer border-purple-950" @click="open"><Menu /></div>
        <button
          class="w-7 h-7 rounded-full border-2 border-red-900"
          @click="changeLanguageEN"
        >
          <p>{{ $t("translate") }}</p>
        </button>
        <label class="switch">
          <input type="checkbox" v-model="isDark" class="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
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
