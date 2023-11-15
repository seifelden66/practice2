<template>
  <div
    class=" bg-[#001D4b] text-white dark:bg-slate-950 h-[100vh] md:h-[26rem] text-center sm:items-center sm:text-left relative"
  >
    <div
      class="absolute left-[50%] translate-x-[-50%] top-28 grid sm:grid-cols-2 md:grid-cols-[2fr,1fr,1fr,1fr] gap-4 border-b-2 pb-5 border-b-gray-600"
    >
      <section class="leading-5" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'">
        <h3>{{$t('logo')}}</h3>
        <h6 >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nulla
          numquam animi quis ratione veritatis nostrum, sint ipsam assumenda eius, dolor
          ab hic laboriosam sit temporibus aperiam fuga enim!
        </h6>
      </section>
      <section class="leading-6" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'">
        <h3>{{$t('company')}}</h3>
        <ol>
          <li>
            <h6>{{$t('TERMS & CONDITIONS')}}</h6>
          </li>
          <li>
            <h6>{{$t('PRIVACY POLICY')}}</h6>
          </li>
        </ol>
      </section>
      <section class="leading-6" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'">
        <h3>{{$t('ABOUT')}}</h3>
        <ol>
          <li>
            <h6>{{$t('Contact Us')}}</h6>
          </li>
          <li>
            <h6>{{$t('BLOG')}}</h6>
          </li>
        </ol>
      </section>
      <section class="leading-6" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <h3>{{$t('ADDRESS')}}</h3>
        <ol>
          <li class="flex md:gap-2 justify-around md:justify-start">
            <IconsPhone />
            <h6>+201148944</h6>
          </li>
          <li class="flex gap-2 md:gap-2 justify-around md:justify-start">
            <IconsEmail />
            <h6>dasada@gmail.com</h6>
          </li>
        </ol>
      </section>
    </div>
    <div
      class="absolute left-[50%] translate-x-[-50%] w-[50%] top-[1px] md:top-[80%] translate-y-[-50%] md:flex items-center"
      :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'"
      
    >
      <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <h6>{{$t ('Copyright 2018 All Rights Reserved by LOGO ') }} &copy;</h6> 
      </div>
      <div class="flex items-center ml-auto gap-3 justify-center">
        <div class="border-2 border-gray-400 rounded-full w-9 h-9 flex items-center justify-center"><IconsEmail/></div>
        <div class="border-2 border-gray-400 rounded-full w-9 h-9 flex items-center justify-center"><IconsPhone/></div>
        <div class="border-2 border-gray-400 rounded-full w-9 h-9 flex items-center justify-center"><IconsSearch /></div>
        <div class="border-2 border-gray-400 rounded-full w-9 h-9 flex items-center justify-center"><IconsEmail/></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>
<style lang="scss" scoped>
p {
  font-weight: bold;
}
h6 {
  color: rgb(170, 170, 170);
}
</style>
