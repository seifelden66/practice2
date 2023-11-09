<template>
  <div class="relative">
    <div class="flex items-center mb-1 px-2 md:px-0">
      <div class="text-[#001D4B]">
        <h3>Top Cities</h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div class="ml-auto text-blue-400">
        <h4 class="flex items-center gap-2">Show All <span>&gt;</span></h4>
      </div>
    </div>
    <div class="grid place-content-center sm:grid-cols-2  md:grid-cols-3">
      <div
        v-for="(i, index) in data" :key="i.id"
        :class="['md:h-32  relative', index === 4 ? 'lg:w-[26.7rem]' : '']"
      >
        <div class="md:h-32">
          <img class="w-full h-full brightness-75" :src="i.image" :alt="i.city" />
        </div>
        <div class="z-20 text-white absolute bottom-3 left-2">
          <h3>{{ i.city }}</h3>
          <p>{{ i.propsNum }} properties</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import data from "../data/cites.json";
</script>


