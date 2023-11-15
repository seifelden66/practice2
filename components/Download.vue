<template>
  <div class="h-56 shadow w-full text-center pt-2 bg-gray-100 mt-9 dark:bg-slate-950 dark:text-white">
    <h2 class="">{{$t('Download the app on this link')}}</h2>
    <div class="flex items-center justify-center gap-3 h-32">
      <div
        class="bg-[#001D4B] md:w-48 h-20 text-white rounded-lg flex items-center justify-center gap-3 px-2 md:mx-0 md:gap-8"
        :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <IconsApple />
        <div class="flex flex-col items-start" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'">
          <h6>{{$t('Get the app')}}</h6>
          <h4>App Store</h4>
        </div>
      </div>
      <div
        class="bg-[#001D4B] md:w-48 h-20 text-white rounded-lg flex items-center justify-center gap-3 px-2 md:mx-0 md:gap-8"
        :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <IconsPlay />
        <div class="flex flex-col items-start" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'">
          <h6>{{$t('Get the app')}}</h6>
          <h4>Google Play</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
