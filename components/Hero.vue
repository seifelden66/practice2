<template>
  <div class="relative">
    <div
      class="bg-[url('city.png')] z-0 md:absolute top-16 left-0 flex items-center bg-cover bg-no-repeat w-full md:h-[80vh] sm:h-[87vh] h-[85vh] brightness-50 text-white"
    />
    <div
      :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
      class="z-10 absolute text-white top-28 lg:top-48 pt-16 w-[55vw] left-[52%] -translate-x-[50%] -translate-y-[50%]"
    >
      <h4 :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'">
        {{
          $t(
            "Exploring uncharted realms of creativity, where innovation sparks endless possibilities."
          )
        }}
        <span class="inline-block"
          ><h3 class="font-bold">{{ $t("yes it is") }}.</h3></span
        >
      </h4>
      <button class="bg-white text-[#001D4B] px-5 py-2 mt-2 rounded">
        {{ $t("see details") }}
      </button>
    </div>
    <div
      class="z-10 absolute top-[55vh] lg:top-[67vh] left-[52%] translate-x-[-50%] translate-y-[-50%]"
    >
      <div
        :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
        class="bg-gray-50 w-[55vw] p-3 pb-5 lg:h-52 rounded text-[#001D4B] pl-5 relative"
      >
        <h3 :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'">
          {{ $t("Embrace curiosity, foster growth.") }}.
        </h3>
        <div class="grid place-content-center lg:grid-cols-3 gap-4 mt-3">
          <div class="bg-white shadow py-3 px-1 w-44 flex flex-col justify-center">
            <h6>CITY / HOTEL / AREA / BUILDING</h6>
            <p class="font-bold">New York</p>
          </div>
          <div class="flex justify-between items-center bg-white shadow py-3 px-1 w-44">
            <div>
              <h6>CHECK-IN</h6>
              <p class="font-bold">THU, SEP 27</p>
            </div>
            <div>
              <h6>CHECK-OUT</h6>
              <p class="font-bold">THU, SEP 27</p>
            </div>
          </div>
          <div class="bg-white shadow py-3 px-1 w-44">
            <h6>ROOM & GUEST</h6>
            <p class="font-bold">20 adults, 15room</p>
          </div>
        </div>
        <button
          class="absolute bottom-[-10%] left-[50%] translate-x-[-50%] bg-gradient-to-r from-green-600 gap-1 items-center to-blue-600 px-5 py-2 rounded text-white flex"
        >
          <IconsSearch /> SEARCH
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.pg {
  clip-path: polygon(
    100% 0,
    100% 100%,
    67% 97%,
    52% 98%,
    40% 100%,
    29% 98%,
    21% 100%,
    11% 98%,
    0 100%,
    0 0
  );
}
</style>
