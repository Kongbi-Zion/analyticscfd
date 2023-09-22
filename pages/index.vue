<template>
  <NuxtLayout name="default">
    <div class="h-full w-full">
      <div class="pb-10">
        <div class="h-fit bg-white pb-8">
          <div
            class="bg-center bg-no-repeat bg-[url('/hero.jpeg')] bg-gray-400 bg-blend-multiply h-[450px]"
          >
            <div
              class="px-4 mx-auto max-w-screen-xl text-center pt-20 md:pt-24"
            >
              <h1 class="mb-4 text-2xl md:text-4xl font-bold text-white">
                Soaring to excellence
              </h1>
              <p
                class="mb-8 text-lg font-semibold text-gray-200 lg:text-xl sm:px-16 lg:px-48"
              >
                Bridging the Tech talent gap in Africa
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
                Take your skills to the next level with expert-led training in
                data analysis, data science, machine learning, etc
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
                Create a high-performing team with intensive training, regular
                performance evaluations, and a customized hiring process.
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
            <Program
              title="Data Analytics Crash Program"
              subTitle="ONLINE | FULL-TIME"
              description=" Uncover the process of extracting insights from data to empower strategic business choices.Embark on a sought-after profession as a data analyst by mastering Excel, SQL, PowerBI, and additional relevant skills."
              image="/increasing.png"
              link="/"
            />
            <Program
              title="Data Science Crash Program"
              subTitle="ONLINE | FULL-TIME"
              description="Gain expertise in the fundamentals of machine learning to predict future outcomes: forecast patterns within vast datasets using Python"
              image="/data-analysis.png"
              link="/"
            />
            <Program
              title="Machine Learning Crash Program"
              subTitle="ONLINE | FULL-TIME"
              description="Enter a rapidly expanding, well-compensated profession of machine learning and AI. Become proficient in essential frameworks and technology stacks, create sophisticated AI applications, and much more."
              image="/machine-learning.png"
              link="/"
            />
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
            <Path
              image="/classroom.png"
              title="Full-Time"
              description="Challenge yourself and change your career with an 10-13 week immersive learning experience."
              link="/"
              buttonText="View Full-Time Courses"
            />
            <Path
              image="/classroom1.png"
              title="Full-Time"
              description="Challenge yourself and change your career with an 10-13 week immersive learning experience."
              link="/"
              buttonText="View Full-Time Courses"
            />
            <Path
              image="/education-app.png"
              title="Full-Time"
              description="Challenge yourself and change your career with an 10-13 week immersive learning experience."
              link="/"
              buttonText="View Full-Time Courses"
              :border="true"
            />
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
          UPCOMING EVENTS / WORKSHOPS
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
            <Event
              title="Which tech career is best for you"
              image="/curiosity.png"
              date="Saturday, 21 October"
              link="/"
            />
            <Event
              title="Career in data analytics info"
              image="/monitor.png"
              date="Saturday, 18th November"
              link="/"
            />
            <Event
              title="Career in data science info"
              image="/data-science.png"
              date="Saturday, 18th November"
              link="/"
            />
            <Event
              title="Career in Machine Learning info"
              image="/machine-learning1.png"
              date="Saturday, 23th December"
              link="/"
            />
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
              >Knowledge First, Pay Back When you Get a Job</NuxtLink
            >
            <h2 class="my-4 font-normal text-[18px]">
              Enroll in an Analytics CFD full time crash program with very
              minimal initial cost. Then you can pay back for your tuition later
              when you land a job.
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
              src="/student.jpeg"
              alt="image description"
            />
          </div>
          <div>
            <div class="h-1 w-full bg-black"></div>
            <div class="text-center -mt-4">
              <span class="bg-white font-medium px-2"> OUR COMMUNITY </span>
            </div>
            <div class="my-4">
              <NuxtLink to="">
                <h2 class="font-bold text-[1.8rem]">1000+</h2>
                <p>GLOBAL ALUMNI</p>
              </NuxtLink>
            </div>
            <div class="my-4">
              <NuxtLink to="">
                <h2 class="font-bold text-[1.8rem]">20+</h2>
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
              src="/group-study.jpeg"
              alt="image description"
            />
          </div>
          <div class="w-full [&_p]:text-[1.2rem] [&_p]:py-2.5">
            <h2 class="text-[1.8rem] font-bold">
              Elevate Your Organization by Enhancing Skills and Cultivating
              Strong Teams.
            </h2>
            <p>
              We transform companies of all sizes by providing, assessing, and
              training talent in today's top tech, design, and business
              strategies.
            </p>
            <p>
              The Analytics Center for Data is a trailblazer in education and
              career evolution, specializing in today's most sought-after
              competencies. As the foremost destination for training, talent
              placement, and career transitions, we cultivate a thriving
              community of professionals who are pursuing careers they are truly
              passionate about.
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
import Program from "~/components/Program.vue";
import Event from "~/components/Event.vue";
import Path from "~/components/Path.vue";
export default {
  name: "Home page",
  components: {
    Program,
    Event,
    Path,
  },
};
</script>

<style lang="scss" scoped></style>
