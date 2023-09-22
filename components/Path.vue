<template>
  <div
    :class="!border && 'md:border-r border-gray-500'"
    class="w-full bg-white"
  >
    <NuxtLink :to="{ path: link }">
      <img class="rounded-t-lg" :src="image" alt="" />
    </NuxtLink>
    <div class="p-5 text-center">
      <NuxtLink :to="{ path: link }">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {{ title }}
        </h5>
      </NuxtLink>
      <p class="mb-3 font-normal text-gray-700">
        {{ description }}
      </p>
      <div class="flex justify-center pt-5">
        <NuxtLink
          :to="{ path: link }"
          class="bg-red-600 text-white px-6 py-3 mt-4 shadow hover:shadow-lg"
        >
          {{ buttonText }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PathComponent",
  props: {
    image: String,
    title: String,
    description: String,
    link: String,
    buttonText: String,
    border: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>
