<template>
  <div class="relative md:h-[380vh]">
    <div class="relative">
      <Nav />
      <Hero />
      <div class="md:absolute md:left-[50%] md:translate-x-[-50%] md:top-[120vh]">
        <TopCities />
        <TopRest />
        <offers />
        <download />
      </div>
    </div>
    <div class="md:absolute bottom-0 -z-40 w-full ">
      <Footer />
    </div>
  </div>
</template>
