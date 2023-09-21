<template>
  <div class="bg-gray-100">
    <div class="mx-auto w-full max-w-screen-xl px-4 md:py-6 lg:py-8">
      <div class="md:flex gap-16">
        <div class="mb-6 md:mb-0 w-full md:pt-5">
          <NuxtLink to="/" class="flex items-center mb-6">
            <img src="/logo.png" class="h-[50px]" />
          </NuxtLink>
          <h2 class="font-normal text-[1.1rem] max-[767px]:text-center">
            Analytics Center For Data is a pioneer in education and career
            transformation, specializing in today's most in-demand skills. The
            leading source for training, staffing, and career transitions, we
            foster a flourishing community of professionals pursuing careers
            they love.
          </h2>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:gap-16 sm:grid-cols-2 w-full">
          <div>
            <!-- <h2
              class="mb-2 pb-3 border-gray-600 text-md font-bold text-gray-900 uppercase "
            >
              Useful Links
            </h2> -->
            <ul
              class="text-gray-500 font-normal [&_li]:mb-2 [&_li]:pb-3 [&_li]:border-gray-600"
            >
              <li class="">
                <NuxtLink
                  to="/"
                  class="pl-2 hover:pl-0 transition-all duration-300 ease-in-out"
                >
                  About us
                </NuxtLink>
              </li>
              <li class="">
                <NuxtLink
                  to="/"
                  class="pl-2 hover:pl-0 transition-all duration-300 ease-in-out"
                >
                  Our impact
                </NuxtLink>
              </li>
              <li class="">
                <NuxtLink
                  to="/"
                  class="pl-2 hover:pl-0 transition-all duration-300 ease-in-out"
                >
                  Our story
                </NuxtLink>
              </li>
              <li class="">
                <NuxtLink
                  to="/"
                  class="pl-2 hover:pl-0 transition-all duration-300 ease-in-out"
                >
                  Blog
                </NuxtLink>
              </li>
              <li class="">
                <NuxtLink
                  to="/"
                  class="pl-2 hover:pl-0 transition-all duration-300 ease-in-out"
                >
                  Find your career
                </NuxtLink>
              </li>
              <li class="">
                <NuxtLink
                  to="/"
                  class="pl-2 hover:pl-0 transition-all duration-300 ease-in-out"
                >
                  Contact us for companies
                </NuxtLink>
              </li>
              <li class="">
                <NuxtLink
                  to="/"
                  class="pl-2 hover:pl-0 transition-all duration-300 ease-in-out"
                >
                  Why analytics center for data
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <!-- <h2
              class="mb-2 pb-3 border-gray-600 text-md font-bold text-gray-900 uppercase "
            >
              Follow us
            </h2> -->
            <ul class="text-gray-500 font-medium -mt-5">
              <li class="mb-4">
                <div
                  class="flex items-center max-[767px]:justify-center space-x-3 my-5"
                >
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[37px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#888888"
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                      />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 14 14"
                    >
                      <path
                        fill="#888888"
                        d="M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7ZM5.72 10.69c3.1 0 4.8-2.57 4.8-4.8v-.22c.33-.24.62-.54.84-.88c-.3.13-.63.22-.97.27c.35-.21.62-.54.74-.93c-.33.19-.69.33-1.07.41c-.31-.33-.75-.53-1.23-.53c-.93 0-1.69.76-1.69 1.69c0 .13.01.26.05.38c-1.4-.07-2.65-.74-3.48-1.76c-.14.25-.23.54-.23.85c0 .58.3 1.1.75 1.4c-.28 0-.54-.08-.76-.21v.02c0 .82.58 1.5 1.35 1.66c-.14.04-.29.06-.44.06c-.11 0-.21-.01-.32-.03c.21.67.84 1.16 1.57 1.17c-.58.45-1.31.72-2.1.72c-.14 0-.27 0-.4-.02c.74.48 1.63.76 2.58.76"
                        class="cls-1"
                      />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#888888"
                        d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z"
                      />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#888888"
                        d="M13 10a3 3 0 1 1-6 0c0-.171.018-.338.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049c.031.162.049.329.049.5zm-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12zm2.4-4.1h1.199a.301.301 0 0 0 .301-.3V6.401a.301.301 0 0 0-.301-.301H12.4a.301.301 0 0 0-.301.301V7.6c.001.165.136.3.301.3zM10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4zm5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111v7.778z"
                      />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#888888"
                        d="M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zm0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9s5 .443 5 3.9s-.086 3.9-5 3.9z"
                      />
                    </svg>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <h2 class="my-5 max-[767px]:text-center">
                    Get exclusive news about upcoming programs, panels and
                    community events.
                  </h2>

                  <div>
                    <form min-width="400 500 600">
                      <div data-style="clean" class="flex items-end mb-3">
                        <ul
                          class="formkit-alert formkit-alert-error"
                          data-element="errors"
                          data-group="alert"
                        ></ul>
                        <div
                          data-element="fields"
                          data-stacked="false"
                          class="min-[500px]:flex items-center w-full max-w-md mb-3 seva-fields formkit-fields"
                        >
                          <div class="relative w-full min-[500px]:mr-3">
                            <label
                              for="member_email"
                              class="hidden block mb-2 text-sm font-medium text-gray-900"
                              >Email address</label
                            >
                            <div
                              class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
                            >
                              <svg
                                class="w-3.5 h-3.5 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 16"
                              >
                                <path
                                  d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                                ></path>
                                <path
                                  d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                                ></path>
                              </svg>
                            </div>
                            <input
                              id="member_email"
                              class="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                              name="email_address"
                              aria-label="Email Address"
                              placeholder="Your email address..."
                              required=""
                              type="email"
                            />
                          </div>
                          <button
                            class="max-[500px]:w-full max-[500px]:mt-4 px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                    <div
                      class="text-sm font-medium text-gray-500 max-[767px]:text-center"
                    >
                      By subscribing, you agree with ConvertKit's
                      <a
                        rel="nofollow"
                        href="https://convertkit.com/terms"
                        class="text-blue-600 hover:underline"
                        >Terms of Service</a
                      >
                      and
                      <a
                        rel="nofollow"
                        class="text-blue-600 hover:underline"
                        href="https://convertkit.com/privacy"
                        >Privacy Policy</a
                      >.
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="flex justify-center text-center">
        <span class="text-sm text-gray-500 px-2"
          >© {{ new Date().getFullYear() }}
          ANALYTICS - Powered by GwenolaKomatchou. All Rights Reserved.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped></style>
