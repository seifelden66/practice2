<template>
    <div class="relative mt-7 text-[#001D4B] dark:text-white" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
      <div class="flex justify-between items-center mb-1 px-2 md:px-0" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'">
        <div class="">
          <h3>{{ $t("Offers & details") }}</h3>
          <p>{{ $t("Exploring uncharted realms of creativity, where innovation sparks endless possibilities.")}}</p>
        </div>
        <div class="">
          <h4 class="flex items-center gap-2">{{ $t("see details") }} <span>&gt;</span></h4>
        </div>
      </div>
      <div class="grid place-content-center sm:grid-cols-2 md:grid-cols-3 text-[#001D4B] dark:text-white">
        <div
          v-for="i in data" :key="i.id"
          class="p-3 dark:bg-slate-950 bg-gray-100"
        >
          <div class="">
            <img class="" :src="i.image" :alt="i.title" />
          </div>
          <div >
            <p class="font-bold">{{ i.title }}</p>
            <h6>{{ i.desc }}</h6>
            
          </div>
        </div>
      </div>
      
    </div>
  </template>
  
  <script setup lang="ts">
  import data from "../data/offers.json";
  </script>
  