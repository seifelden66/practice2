<template>
  <div class="relative">
    <div
      class="bg-[url('city.png')] z-0 md:absolute top-8 left-0 flex items-center bg-cover bg-no-repeat w-full md:h-[107vh] sm:h-[70vh] h-[60vh] brightness-50 text-white"
    />
    <div
      class="z-10 md:absolute text-white top-36 pt-16 w-[55vw] left-[52%] -translate-x-[50%] -translate-y-[50%]"
    >
      <h3>
        Lorem, ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor.
        <span class="inline-block"><h1 class="font-bold">Lorem, ipsum.</h1></span>
      </h3>
      <button class="bg-white text-[#001D4B] px-5 py-2 mt-6 rounded">see details</button>
    </div>
    <div class="z-10 absolute top-96 left-[52%] translate-x-[-50%] translate-y-[-50%]">
      <div class="bg-gray-50 w-[55vw] p-3 lg:h-52 rounded text-[#001D4B] pl-5 relative">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <div class="grid place-content-center lg:grid-cols-3 gap-4 mt-3">
          <div class="bg-white shadow py-3 px-1 w-52 flex flex-col justify-center">
            <h6>CITY / HOTEL / AREA / BUILDING</h6>
            <p class="font-bold">New York</p>
          </div>
          <div class="flex justify-between items-center bg-white shadow py-3 px-1 w-52">
            <div>
              <h6>CHECK-IN</h6>
              <p class="font-bold">THU, SEP 27</p>
            </div>
            <div>
              <h6>CHECK-OUT</h6>
              <p class="font-bold">THU, SEP 27</p>
            </div>
          </div>
          <div class="bg-white shadow py-3 px-1 w-52">
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
