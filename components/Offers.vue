<template>
    <div class="relative mt-7">
      <div class="flex items-center mb-1 px-2 md:px-0">
        <div class="text-[#001D4B]">
          <h3>Offers & details</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="ml-auto text-blue-400">
          <h4 class="flex items-center gap-2">Show All <span>&gt;</span></h4>
        </div>
      </div>
      <div class="grid place-content-center sm:grid-cols-2 md:grid-cols-3 text-[#001D4B]">
        <div
          v-for="i in data" :key="i.id"
          class=""
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
  