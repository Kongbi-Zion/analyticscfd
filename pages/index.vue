<template>
  <NuxtLayout name="default">
    <div class="h-full w-full">
      <div class="pb-10">
        <div class="h-fit bg-white pb-8">
          <div
            class="bg-center bg-no-repeat bg-[url('https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/hero-96e8680a0a0fbd88fdc3893e39fbb464.webp')] bg-gray-600 bg-blend-multiply h-[450px]"
          >
            <div
              class="px-4 mx-auto max-w-screen-xl text-center pt-20 md:pt-24"
            >
              <h1 class="mb-4 text-2xl md:text-4xl font-extrabold text-white">
                Learning Today, Leading Tomorrow
              </h1>
              <p
                class="mb-8 text-lg font-semibold text-gray-300 lg:text-xl sm:px-16 lg:px-48"
              >
                Cultivating Diverse Tech Talents in Africa
              </p>
            </div>
          </div>

          <div
            class="px-6 md:px-20 lg:px-36 md:flex justify-center gap-7 -mt-48"
          >
            <div
              class="min-md:max-w-xl max-md:mb-8 shadow w-full p-8 bg-white border border-gray-200 rounded"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                INDIVIDUALS
              </h5>
              <p class="font-normal text-[1.125rem]">
                Get ahead with expert-led training in data analysis , data
                science, machine learning, etc
              </p>
              <button class="bg-red-600 text-white px-6 py-4 mt-4 shadow">
                Get Started
              </button>
            </div>
            <div
              class="min-md:max-w-xl w-full shadow p-8 bg-white border border-gray-200 rounded"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                COMPANIES
              </h5>
              <p class="font-normal text-[1.125rem]">
                Fortify your workforce with intensive training, evaluations, and
                an exclusive hiring pipeline.
              </p>
              <button class="bg-red-600 text-white px-6 py-4 mt-4 shadow">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2
          class="text-center font-bold text-[1.875rem] md:mt-5 -mt-3 mb-7 md:mb-10"
        >
          Start Learning
        </h2>
        <div class="flex justify-center">
          <div
            class="px-6 max-w-screen-xl grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-6"
          >
            <NuxtLink
              to="/"
              @mouseover="mouseover"
              class="shadow relative w-full bg-white border border-gray-200 rounded"
            >
              <div class="text-center p-5">
                <h5 class="mb-2 text-[1.25rem] font-bold text-gray-900">
                  Data Analytics Immersive
                </h5>
                <div class="w-full flex justify-center py-5">
                  <img
                    class="h-[5rem]"
                    src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/data-analytics-immersive-0092418c7900c0284b6b712d551bb666.svg"
                  />
                </div>
                <h2 class="mb-2 font-bold text-gray-400">ONLINE | FULL-TIME</h2>
                <p class="font-normal text-[1rem]">
                  Discover how to mine data for insights to help inform
                  strategic business decisions. Pursue an in-demand career as a
                  data analyst by learning SQL, Tableau, PowerBI, Python, and
                  more.
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
            <NuxtLink
              to="/"
              class="shadow w-full bg-white border border-gray-200 rounded"
            >
              <div class="text-center p-5">
                <h5 class="mb-2 text-[1.25rem] font-bold text-gray-900">
                  Data Analytics Immersive
                </h5>
                <div class="w-full flex justify-center py-5">
                  <img
                    class="h-[5rem]"
                    src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/data-analytics-immersive-0092418c7900c0284b6b712d551bb666.svg"
                  />
                </div>
                <h2 class="mb-2">ONLINE | FULL-TIME</h2>
                <p class="font-normal text-[1rem]">
                  Discover how to mine data for insights to help inform
                  strategic business decisions. Pursue an in-demand career as a
                  data analyst by learning SQL, Tableau, PowerBI, Python, and
                  more.
                </p>
              </div>
              <!-- <div>
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
            </div> -->
            </NuxtLink>
            <NuxtLink
              to="/"
              class="shadow w-full bg-white border border-gray-200 rounded"
            >
              <div class="text-center p-5">
                <h5 class="mb-2 text-[1.25rem] font-bold text-gray-900">
                  Data Analytics Immersive
                </h5>
                <div class="w-full flex justify-center py-5">
                  <img
                    class="h-[5rem]"
                    src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/data-analytics-immersive-0092418c7900c0284b6b712d551bb666.svg"
                  />
                </div>
                <h2 class="mb-2">ONLINE | FULL-TIME</h2>
                <p class="font-normal text-[1rem]">
                  Discover how to mine data for insights to help inform
                  strategic business decisions. Pursue an in-demand career as a
                  data analyst by learning SQL, Tableau, PowerBI, Python, and
                  more.
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center pt-6">
          <button
            class="bg-red-600 text-white px-6 py-3 mt-4 shadow hover:shadow-lg"
          >
            Browse Courses
          </button>
        </div>
      </div>

      <div class="w-full bg-white h-full mt-10 pb-10">
        <div class="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[170px] -mt-[84px] fill-gray-100"
            viewBox="0 0 24 24"
          >
            <path d="m7 10l5 5l5-5z" />
          </svg>
        </div>

        <h2 class="font-bold text-[1.7rem] text-center -mt-5 mb-7">
          Choose Your Path
        </h2>

        <div class="flex justify-center">
          <div
            class="px-6 pb-16 max-w-screen-xl grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-y-6"
          >
            <div class="w-full bg-white md:border-r border-gray-500">
              <NuxtLink to="/">
                <img
                  class="rounded-t-lg"
                  src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/full-time-356ff4246bbe4d674e93c1f1a654b662.webp"
                  alt=""
                />
              </NuxtLink>
              <div class="p-5 text-center">
                <NuxtLink to="/">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                  >
                    Full-Time
                  </h5>
                </NuxtLink>
                <p class="mb-3 font-normal text-gray-700">
                  Challenge yourself and change your career with an 10-13 week
                  immersive learning experience.
                </p>
                <div class="flex justify-center pt-5">
                  <button
                    class="bg-red-600 text-white px-6 py-3 mt-4 shadow hover:shadow-lg"
                  >
                    View Full-Time Courses
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full bg-white md:border-r border-gray-500">
              <NuxtLink to="/">
                <img
                  class="rounded-t-lg"
                  src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/full-time-356ff4246bbe4d674e93c1f1a654b662.webp"
                  alt=""
                />
              </NuxtLink>
              <div class="p-5 text-center">
                <NuxtLink to="/">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                  >
                    Full-Time
                  </h5>
                </NuxtLink>
                <p class="mb-3 font-normal text-gray-700">
                  Challenge yourself and change your career with an 10-13 week
                  immersive learning experience.
                </p>
              </div>
            </div>
            <div class="w-full bg-white">
              <NuxtLink to="/">
                <img
                  class="rounded-t-lg"
                  src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/full-time-356ff4246bbe4d674e93c1f1a654b662.webp"
                  alt=""
                />
              </NuxtLink>
              <div class="p-5 text-center">
                <NuxtLink to="/">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                  >
                    Full-Time
                  </h5>
                </NuxtLink>
                <p class="mb-3 font-normal text-gray-700">
                  Challenge yourself and change your career with an 10-13 week
                  immersive learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 class="font-bold text-[1.7rem] text-center -mt-8 mb-10">
          Fund Your Future
        </h2>

        <div class="flex justify-center mt-5">
          <div
            class="px-6 pb-16 max-w-screen-xl grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-y-6"
          >
            <div class="w-full bg-white">
              <NuxtLink to="/" class="flex justify-center">
                <img
                  class="h-[8rem]"
                  src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/catalyst-0c8392ed0dd919b85ea13363453afad0.webp"
                  alt=""
                />
              </NuxtLink>
              <div class="p-5 text-center">
                <NuxtLink to="/">
                  <h5
                    class="mb-2 text-[1.125rem] mb-5 font-bold tracking-tight text-gray-900"
                  >
                    Catalyst ISL Program
                  </h5>
                </NuxtLink>
                <p class="mb-3 font-normal text-gray-700">
                  Find out how you can learn now, and pay after you're hired.
                </p>
                <div class="flex justify-center pt-3">
                  <button
                    class="border text-red-600 border-red-600 px-6 py-3 mt-4"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full bg-white">
              <NuxtLink to="/" class="flex justify-center">
                <img
                  class="h-[8rem]"
                  src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/catalyst-0c8392ed0dd919b85ea13363453afad0.webp"
                  alt=""
                />
              </NuxtLink>
              <div class="p-5 text-center">
                <NuxtLink to="/">
                  <h5
                    class="mb-2 text-[1.125rem] mb-5 font-bold tracking-tight text-gray-900"
                  >
                    Catalyst ISL Program
                  </h5>
                </NuxtLink>
                <p class="mb-3 font-normal text-gray-700">
                  Find out how you can learn now, and pay after you're hired.
                </p>
                <div class="flex justify-center pt-3">
                  <button
                    class="border text-red-600 border-red-600 px-6 py-3 mt-4"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full bg-white">
              <NuxtLink to="/" class="flex justify-center">
                <img
                  class="h-[8rem]"
                  src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/catalyst-0c8392ed0dd919b85ea13363453afad0.webp"
                  alt=""
                />
              </NuxtLink>
              <div class="p-5 text-center">
                <NuxtLink to="/">
                  <h5
                    class="mb-2 text-[1.125rem] mb-5 font-bold tracking-tight text-gray-900"
                  >
                    Catalyst ISL Program
                  </h5>
                </NuxtLink>
                <p class="mb-3 font-normal text-gray-700">
                  Find out how you can learn now, and pay after you're hired.
                </p>
                <div class="flex justify-center pt-3">
                  <button
                    class="border text-red-600 border-red-600 px-6 py-3 mt-4"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full bg-white">
              <NuxtLink to="/" class="flex justify-center">
                <img
                  class="h-[8rem]"
                  src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/catalyst-0c8392ed0dd919b85ea13363453afad0.webp"
                  alt=""
                />
              </NuxtLink>
              <div class="p-5 text-center">
                <NuxtLink to="/">
                  <h5
                    class="mb-2 text-[1.125rem] mb-5 font-bold tracking-tight text-gray-900"
                  >
                    Catalyst ISL Program
                  </h5>
                </NuxtLink>
                <p class="mb-3 font-normal text-gray-700">
                  Find out how you can learn now, and pay after you're hired.
                </p>
                <div class="flex justify-center pt-3">
                  <button
                    class="border text-red-600 border-red-600 px-6 py-3 mt-4"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[170px] -mb-[130px] fill-white"
            viewBox="0 0 24 24"
          >
            <path d="m7 10l5 5l5-5z" />
          </svg>
        </div>
      </div>

      <div>
        <h2 class="text-center text-[1.125rem] font-bold pt-16">
          UPCOMING EVENTS IN
        </h2>
        <div class="flex justify-center pt-4">
          <h2 class="flex items-center font-bold text-3xl">
            <span>Online</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000000"
                d="M11.65 14.65q.15.15.35.15t.35-.15l2.8-2.8q.25-.25.125-.55T14.8 11H9.2q-.35 0-.475.3t.125.55l2.8 2.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
              />
            </svg>
          </h2>
        </div>

        <div class="flex justify-center pt-10">
          <div
            class="px-6 max-w-screen-xl grid md:grid-cols-2 grid-cols-1 gap-6"
          >
            <NuxtLink
              to=""
              class="md:flex bg-white border border-gray-200 shadow hover:bg-gray-100 p-4 relative"
            >
              <img
                class="max-w-[132px] h-[80px] w-full"
                src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/4304/thumb_on_demand__2_.png"
              />
              <div
                class="flex flex-col max-md:pt-1 justify-between md:px-4 leading-normal pr-7"
              >
                <h5
                  class="mb-2 text-[1.125rem] font-bold tracking-tight text-gray-900"
                >
                  [PRESS PLAY] So You Think You Want A Career In Tech?
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
                  Tuesday, 03 October
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
            <NuxtLink
              to=""
              class="md:flex bg-white border border-gray-200 shadow hover:bg-gray-100 p-4 relative"
            >
              <img
                class="max-w-[132px] h-[80px] w-full"
                src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/4304/thumb_on_demand__2_.png"
              />
              <div
                class="flex flex-col max-md:pt-1 justify-between md:px-4 leading-normal pr-7"
              >
                <h5
                  class="mb-2 text-[1.125rem] font-bold tracking-tight text-gray-900"
                >
                  [PRESS PLAY] So You Think You Want A Career In Tech?
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
                  Tuesday, 03 October
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
            <NuxtLink
              to=""
              class="md:flex bg-white border border-gray-200 shadow hover:bg-gray-100 p-4 relative"
            >
              <img
                class="max-w-[132px] h-[80px] w-full"
                src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/4304/thumb_on_demand__2_.png"
              />
              <div
                class="flex flex-col max-md:pt-1 justify-between md:px-4 leading-normal pr-7"
              >
                <h5
                  class="mb-2 text-[1.125rem] font-bold tracking-tight text-gray-900"
                >
                  [PRESS PLAY] So You Think You Want A Career In Tech?
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
                  Tuesday, 03 October
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
            <NuxtLink
              to=""
              class="md:flex bg-white border border-gray-200 shadow hover:bg-gray-100 p-4 relative"
            >
              <img
                class="max-w-[132px] h-[80px] w-full"
                src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/4304/thumb_on_demand__2_.png"
              />
              <div
                class="flex flex-col max-md:pt-1 justify-between md:px-4 leading-normal pr-7"
              >
                <h5
                  class="mb-2 text-[1.125rem] font-bold tracking-tight text-gray-900"
                >
                  [PRESS PLAY] So You Think You Want A Career In Tech?
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
                  Tuesday, 03 October
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
          </div>
        </div>
        <div class="flex justify-center pt-6">
          <button
            class="bg-red-600 font-medium text-white px-6 py-3 mt-4 shadow hover:shadow-lg"
          >
            View All Events
          </button>
        </div>
      </div>

      <div class="w-full bg-white h-full mt-10 pb-10">
        <div class="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[170px] -mt-[84px] fill-gray-100"
            viewBox="0 0 24 24"
          >
            <path d="m7 10l5 5l5-5z" />
          </svg>
        </div>
        <div
          class="w-full grid lg:grid-cols-3 grid-cols-1 px-6 min-[500px]px-16 min-[600px]:px-20 text-center gap-6"
        >
          <div>
            <NuxtLink to="" class="font-bold text-[1.8rem]"
              >Learn Now, Pay Back After You're Hired</NuxtLink
            >
            <h2 class="my-4 font-normal text-[18px]">
              Take a full-time GA Immersive course with little upfront cost.
              With the Catalyst ISL Program made available through Stride
              Funding¹, you pay back your tuition as manageable monthly payments
              based on your income—only after you've landed a job earning
              $40,000/year or more.²
            </h2>
            <div class="flex justify-center">
              <button
                class="bg-red-600 text-white px-6 py-3 mt-4 shadow hover:shadow-lg"
              >
                Get Info
              </button>
            </div>
          </div>
          <div>
            <img
              class="h-auto max-w-full"
              src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/submasthead-02b672aa3596911afa460a540f6fddf6.webp"
              alt="image description"
            />
          </div>
          <div>
            <div class="h-1 w-full bg-black"></div>
            <div class="text-center -mt-4">
              <span class="bg-white font-medium px-2">
                OUR GLOBAL COMMUNITY
              </span>
            </div>
            <div class="my-4">
              <NuxtLink to="">
                <h2 class="font-bold text-[1.8rem]">6</h2>
                <p>CAMPUSES WORLDWIDE</p>
              </NuxtLink>
            </div>
            <div class="my-4">
              <NuxtLink to="">
                <h2 class="font-bold text-[1.8rem]">97,000+</h2>
                <p>GLOBAL ALUMNI</p>
              </NuxtLink>
            </div>
            <div class="my-4">
              <NuxtLink to="">
                <h2 class="font-bold text-[1.8rem]">20,000+</h2>
                <p>EXPERT INSTRUCTORS</p>
              </NuxtLink>
            </div>
            <div class="my-4">
              <NuxtLink to="">
                <h2 class="font-bold text-[1.8rem]">19,000+</h2>
                <p>HIRING PARTNERS</p>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="w-full lg:flex px-6 min-[500px]px-16 min-[600px]:px-20 gap-8 my-16"
        >
          <div class="w-full max-lg:mb-3">
            <img
              class="h-auto max-w-full"
              src="https://ga-website-production-herokuapp-com.global.ssl.fastly.net/packs/media/assets/images/home/corporate-training-f6b24fe11c1257a39ed46c301840d436.webp"
              alt="image description"
            />
          </div>
          <div class="w-full [&_p]:text-[1.2rem] [&_p]:py-2.5">
            <h2 class="text-[1.8rem] font-bold">
              Transform Your Company by Boosting Skills and Building Teams
            </h2>
            <p>
              General Assembly's commitment to cultivating in-demand skills and
              leading-edge talent extends to your workforce.
            </p>
            <p>
              We transform companies of all sizes by providing, assessing, and
              training talent in today's top tech, design, and business
              strategies.
            </p>
            <button
              class="bg-red-600 font-medium text-white px-6 py-3 mt-4 shadow hover:shadow-lg"
            >
              View All Events
            </button>
          </div>
        </div>

        <div class="px-6 min-[500px]px-16 min-[600px]:px-20">
          <div class="h-1 w-full bg-black"></div>
          <div class="text-center -mt-4">
            <span class="bg-white font-medium px-2"
              >CLIENTS AND HIRING PARTNERS</span
            >
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  name: "Home page",
};
</script>

<style lang="scss" scoped></style>
