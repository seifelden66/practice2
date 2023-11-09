<template>
  <div class="relative md:h-[380vh]">
    <div class="relative">
      <Nav />
      <Hero />
      <div class="md:absolute md:left-[50%] md:translate-x-[-50%] md:top-[120vh]">
        <div data-aos="fade-up" :data-aos-duration="450" :data-aos-delay="200">
          <TopCities />
        </div>
        <div data-aos="fade-up" :data-aos-duration="450" :data-aos-delay="200">
          <TopRest />
        </div>
        <div data-aos="fade-up" :data-aos-duration="450" :data-aos-delay="200">
          <offers />
        </div>
        <div data-aos="fade-up" :data-aos-duration="450" :data-aos-delay="200">
          <download />
        </div>
      </div>
    </div>
    <div class="md:absolute bottom-0 -z-40 w-full">
      <Footer />
    </div>
  </div>
</template>
