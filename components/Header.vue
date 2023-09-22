<template>
  <div class="bg-white h-[70px]">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-[70px] px-4"
    >
      <NuxtLink to="/" class="flex items-center">
        <img src="/logo.png" class="h-10 mr-3" />
      </NuxtLink>
      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-multi-level"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-0 md:mt-0 md:border-0"
        >
          <li
            class="h-[70px] hover:bg-slate-500 hover:cursor-pointer px-3 flex items-center"
          >
            <NuxtLink
              to="/"
              class="flex items-center py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              aria-current="page"
              ><p>Courses</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 -ml-[1px] mt-[1px]"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="m7 10l5 5l5-5z" />
              </svg>
            </NuxtLink>
          </li>
          <li
            class="h-[70px] hover:bg-slate-500 hover:cursor-pointer px-3 flex items-center"
          >
            <NuxtLink
              to="/"
              class="flex items-center py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              aria-current="page"
              ><p>For companies</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 -ml-[1px] mt-[1px]"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="m7 10l5 5l5-5z" />
              </svg>
            </NuxtLink>
          </li>
          <li
            class="h-[70px] hover:bg-slate-500 hover:cursor-pointer px-3 flex items-center"
          >
            <NuxtLink
              to="/"
              class="flex items-center py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              aria-current="page"
              ><p>About us</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 -ml-[1px] mt-[1px]"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="m7 10l5 5l5-5z" />
              </svg>
            </NuxtLink>
          </li>
          <li
            class="h-[70px] bg-yellow-500 hover:cursor-pointer px-3 flex items-center"
          >
            <NuxtLink
              to="/"
              class="flex items-center py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              aria-current="page"
              ><p>Find your career</p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
