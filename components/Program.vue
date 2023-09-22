<template>
  <NuxtLink
    :to="{ path: link }"
    @mouseover="mouseover"
    class="shadow relative w-full bg-white border border-gray-200 rounded"
  >
    <div class="text-center p-5">
      <h5 class="mb-2 text-[1.25rem] font-bold text-gray-900">
        {{ title }}
      </h5>
      <div class="w-full flex justify-center py-5">
        <img class="h-[5rem]" :src="image" />
      </div>
      <h2 class="mb-2 font-bold text-gray-400">{{ subTitle }}</h2>
      <p class="font-normal text-[1rem]">
        {{ description }}
      </p>
      <div class="absolute top-[45%] right-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="#888888"
            d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"
          />
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "Program",
  props: {
    title: String,
    subTitle: String,
    image: String,
    description: String,
    link: String,
  },
};
</script>

<style lang="scss" scoped></style>
