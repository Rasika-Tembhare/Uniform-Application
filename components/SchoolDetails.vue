<template>
  <section>
    <div
      class="md:container md:mx-auto items-center justify-center bg-base-100"
    >
      <div class="flex flex-col md:flex-row w-full max-w-full">
        <div class="container items-center justify-center">
          <!-- Breadcrumbs -->
          <div class="w-full max-w-2xl md:w-full md:max-w-2xl justify-center">
            <div class="text-md font-medium breadcrumbs relative">
              <ul class="text-accent">
                <li>
                  <NuxtLink class="text-gray-500">Schools</NuxtLink>
                </li>
                <li>
                  <NuxtLink class="text-gray-500">{{
                    school?.school_city
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink class="text-gray-500">{{
                    school?.school_board
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink class="text-gray-500">{{
                    school?.school_name
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <!-- school heading -->
          <div class="flex flex-col w-full max-w-xl">
            <div class="flex flex-row gap-2 py-2 font-normal text-primary">
              <div class="flex">
                <h1 class="font-heading text-2xl md:text-4xl">
                  {{ school?.school_name }}
                </h1>
              </div>
              <div class="pt-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png"
                  alt=""
                  class="w-7 h-fit"
                />
              </div>
            </div>
            <!-- school details -->
            <div class="text-gray-500 hover:text-info">
              <NuxtLink rel="nofollow">{{ school?.school_web }}</NuxtLink>
            </div>
            <div class="py-5 text-gray-500 flex">
              <div>
                <img
                  src="https://as2.ftcdn.net/v2/jpg/02/98/28/57/1000_F_298285715_ct4qtZOJH119A39TdMrbkLsfziVCX1Rz.jpg"
                  alt="location"
                  class="w-12 h-8 md:w-8"
                />
              </div>
              <div>
                {{ school?.school_addr }},{{ school?.school_area }},{{
                  school?.school_city
                }}
              </div>
            </div>
            <!-- rating and review -->
            <div>
              <div class="flex flex-1 py-2">
                <div class="rating gap-1" v-if="rate">
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <p class="">{{ rate }}</p>
                </div>
                <div class="px-3" v-if="countReview">
                  <span> {{ countReview }} reviews</span>
                  <div>
                    <label
                      for="my-modal-2"
                      class="text-sm text-info hover:text-indigo-900 cursor-pointer"
                      >Write a review?</label
                    >
                  </div>
                </div>
                <div class="px-3" v-else>
                  <div>
                    <label
                      for="my-modal-2"
                      class="text-sm text-info hover:text-indigo-900 cursor-pointer"
                      >Write a review?</label
                    >
                  </div>
                </div>
              </div>
              <ReviewModal />
              <div class="flex flex-1 py-2">
                <div
                  class="box-border h-10 w-12 p-4 rounded-lg bg-lime-500"
                ></div>
                <div class="flex flex-col px-2">
                  <span>Sanjeev Kumar</span>
                  <span class="inline-flex px-1">Best School</span>
                </div>
              </div>
            </div>

            <!-- button -->
            <div
              class="flex flex-1 gap-2 md:items-center fixed bottom-0 inset-auto md:sticky z-40"
            >
              <div class="flex">
                <button
                  class="btn btn-accent w-44 md:w-48 max-w-xs mt-5 mb-2 text-base text-secondary"
                >
                  <label for="my-modal-1" class="cursor-pointer"
                    >Apply Now</label
                  >
                </button>
              </div>
              <div class="flex">
                <button
                  class="btn text-accent w-44 md:w-48 max-w-xs mt-5 mb-2 bg-red-100 text-base border-none"
                >
                  <label for="my-modal-1" class="cursor-pointer"
                    >Admission Enquiry</label
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
        <Enquiry_modal />

        <!-- image view -->
        <div class="container flex flex-col md:flex-row-reverse">
          <!-- big image -->
          <div class="container items-center justify-center pt-2 md:pt-2">
            <div class="h-auto">
              <div class="relative">
                <img
                  v-if="school_img_1"
                  :src="`https://uniformapp-images.s3.ap-south-1.amazonaws.com/school_images/${school_img_1}`"
                  alt="school image"
                  class="rounded-xl md:rounded-xl w-full max-w-xl md:w-full md:max-w-full relative md:relative h-56 md:h-96"
                />
                <img
                  v-else
                  src="data:image/jpeg;base64,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"
                  alt="school image"
                  class="rounded-xl md:rounded-xl w-full max-w-xl md:w-full md:max-w-full relative md:relative h-56 md:h-96"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-2"></div>
          <!-- small image -->
          <!-- <div class="container-md items-center justify-center pt-2 md:pt-2">
            <div class="h-auto flex gap-3 md:flex-col">
              <div class="relative md:align-bottom">
                <img
                  v-if="school_img_2"
                  :src="`https://uniformapp-images.s3.ap-south-1.amazonaws.com/school_images/${school_img_2}`"
                  alt="school image"
                  class="rounded-xl w-24 h-24 md:w-32 md:h-24"
                />
                <img
                  v-else
                  src="data:image/jpeg;base64,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"
                  alt="school image"
                  class="rounded-xl w-24 h-24 md:w-32 md:h-24"
                />
              </div>
              <div class="relative md:align-bottom">
                <img
                  v-if="school_img_3"
                  :src="`https://uniformapp-images.s3.ap-south-1.amazonaws.com/school_images/${school_img_3}`"
                  alt="school image"
                  class="rounded-xl w-24 h-24 md:w-32 md:h-24"
                />
                <img
                  v-else
                  src="data:image/jpeg;base64,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"
                  alt="school image"
                  class="rounded-xl w-24 h-24 md:w-32 md:h-24"
                />
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSchoolStore } from "~~/stores/school";
import Enquiry_modal from "./Enquiry_modal.vue";
const schoolStore = useSchoolStore();
const school = schoolStore.jsonData;
// const { school } = defineProps(["school"]);

const sch_id = school.school_id;
// console.log(sch_id);

const school_img_1 = school.school_picture;
// const school_img_2 = school.school_picture2;
// const school_img_3 = school.school_picture3;

const ratings = await useFetch("/api/fetchRating", {
  method: "POST",
  body: sch_id,
});
const rate = ref();
rate.value = ratings.data.value?._avg.rating?.toFixed(1);
// const avgReview = ratings.data.value?._count.review;
const countReview = ref();
countReview.value = ratings.data.value?._count.review;

// console.log(rate.value);
// console.log(avgReview);

// const store = useDetailsStore();
// console.log(store.school);
</script>
