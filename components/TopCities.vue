<template>
  <div class="relative text-[#001D4B] dark:text-white" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <div class="flex justify-between items-center mb-1 px-2 md:px-0" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'">
      <div class="">
        <h3>{{ $t("top cities") }}</h3>
        <p>{{ $t("Exploring uncharted realms of creativity, where innovation sparks endless possibilities.")}}</p>
      </div>
      <div class="">
        <h4 class="flex items-center gap-2">{{ $t("see details") }} <span>&gt;</span></h4>
      </div>
    </div>
    <div class="grid place-content-center sm:grid-cols-2  md:grid-cols-3">
      <div
        v-for="(i, index) in data" :key="i.id"
        :class="['md:h-32 h-44 relative', index === 4 ? 'lg:w-[26.7rem]' : '']"
      >
        <div class="md:h-32 h-44">
          <img class="w-full h-full brightness-75" :src="i.image" :alt="i.city" />
        </div>
        <div class="z-20 text-white absolute bottom-3 left-2">
          <h3>{{ i.city }}</h3>
          <p>{{ i.propsNum }} {{ $t("properties") }}</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import data from "../data/cites.json";
</script>


