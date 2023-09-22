<template>
  <NuxtLink
    :to="{ path: link }"
    class="md:flex bg-white border border-gray-200 shadow hover:bg-gray-100 p-4 relative"
  >
    <img class="max-w-[132px] h-[60px] md:h-[90px] w-full" :src="image" />
    <div
      class="flex flex-col max-md:pt-1 justify-between md:px-4 leading-normal pr-7"
    >
      <h5 class="mb-2 text-[1.125rem] font-bold tracking-tight text-gray-900">
        {{ title }}
      </h5>
      <p class="font-normal text-gray-700 inline-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-[23px] mr-2"
          viewBox="0 0 24 24"
        >
          <path
            fill="#888888"
            d="M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V3q0-.425.288-.713T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.713T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Z"
          />
        </svg>
        {{ date }}
      </p>
    </div>
    <div class="absolute top-[45%] right-3">
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
  </NuxtLink>
</template>

<script>
export default {
  name: "EventComponent",
  props: {
    title: String,
    image: String,
    date: String,
    link: String,
  },
};
</script>

<style lang="scss" scoped></style>
