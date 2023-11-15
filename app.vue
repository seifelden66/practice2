<template>
  <div class="relative md:h-[340vh] lg:h-[360vh] dark:bg-slate-900 dark:text-white">
    <div class="relative">
      <div class="fixed z-[999] w-full">
        <Nav />
      </div>
      <Hero />
      <div
        class="md:absolute md:left-[50%] md:translate-x-[-50%] md:top-[100vh] dark:z-20"
      >
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
    <div class="md:absolute bottom-0 -z-40 dark:z-10 w-full">
      <Footer />
    </div>
  </div>
</template>
