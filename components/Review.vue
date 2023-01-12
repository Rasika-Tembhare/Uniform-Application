<template>
  <section v-if="JsonData != ''">
    <div
      class="md:container md:mx-auto items-center justify-center bg-base-100 py-5"
    >
      <div class="flex flex-col md:flex-row w-full max-w-full">
        <div
          tabindex="0"
          class="collapse collapse-open border border-base-300 rounded-box w-full bg-gray-100 shadow-md"
          @click="toggle"
        >
          <div
            class="font-heading collapse-title text-lg md:text-2xl font-medium cursor-pointer text-primary"
            @click="isHidden = !isHidden"
          >
            Reviews
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 inline-block float-right"
              v-if="showSvg1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 inline-block float-right"
              v-if="showSvg2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div class="collapse-content" v-if="isHidden">
            <div
              class="container max-w-full md:p-5 md:items-center grid grid-flow-row"
            >
              <ul
                class="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-12"
              >
                <li
                  class="row-auto"
                  v-for="item in fetchedReviews"
                  :key="item?.school_id"
                >
                  <div
                    class="card w-80 h-52 md:h-56 md:w-96 flex flex-col py-2 m-auto md:flex-row overflow-auto relative"
                  >
                    <!-- Card-1 -->

                    <div
                      class="card-body p-6 border bg-secondary border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                    >
                      <div class="flex py-2">
                        <div
                          class="box-border w-6 h-5 md:h-10 md:w-12 p-4 rounded-lg bg-blue-500"
                        ></div>
                        <div>
                          <div class="col-span-2">
                            <div class="inline-flex px-2 text-base">
                              {{ item?.name }}
                            </div>
                          </div>
                          <div class="row-span-2 col-span-2">
                            <div class="flex items-center">
                              <div v-for="svg in parseInt(item?.rating)">
                                <svg
                                  aria-hidden="true"
                                  class="w-5 h-5 text-yellow-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>First star</title>
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  ></path>
                                </svg>
                              </div>

                              <div
                                class="text-sm font-medium text-gray-500 dark:text-gray-400"
                              >
                                <div class="px-1">
                                  <span> {{ item?.rating }}</span>

                                  <span class="px-1 pl-4">{{
                                    normalizeDate(item?.date)
                                  }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="text-sm md:text-base flex flex-col justify-items-center"
                      >
                        <span>
                          {{ item?.review }}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div
              class="grid grid-cols-1 place-items-center py-1"
              v-if="countReview >= 3"
            >
              <button
                class="btn text-primary hover:text-secondary text-base"
                @click="reviewVisible += 3"
              >
                View More
                <svg
                  class="fill-current text-accent h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                  />
                </svg>
              </button>
              <!-- <button class="btn mx-2" @click="reviewVisible -= 3">
                View Less
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { isTemplateElement } from "@babel/types";
import { useSchoolStore } from "~~/stores/school";
const schoolStore = useSchoolStore();
const school = schoolStore.jsonData;

// code for collapse open and closed
const isHidden = ref(true);
const showSvg1 = ref(true); //minus
const showSvg2 = ref(false); //plus
function toggle() {
  if (!showSvg2.value) {
    showSvg2.value = true;
    showSvg1.value = false;
  } else {
    showSvg2.value = false;
    showSvg1.value = true;
  }
}

// for date normalization
function normalizeDate(_date: Date) {
  const dateString = _date.toString();
  // Split the date string at the "T" to get the date portion
  const datePortion = dateString.split("T")[0];
  // Parse the date using the Date object and the ISO-8601 format
  const date = new Date(datePortion);
  // Use the toLocaleDateString method to format the date as a local date
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

const sch_id = school.school_id;
console.log(sch_id);

const review = await useFetch("/api/fetchReview", {
  method: "POST",
  body: sch_id,
});
// stored reviews data into JsonData
const JsonData = ref();
JsonData.value = review.data.value;
// console.log(JsonData.value[0].rating);

// for displaying reviews

const reviewVisible = ref(3);
const fetchedReviews = computed(() => {
  return JsonData.value.slice(0, reviewVisible.value);
});

const ratings = await useFetch("/api/fetchRating", {
  method: "POST",
  body: sch_id,
});

const countReview = ref();
countReview.value = ratings.data.value?._count.review;
</script>

<style scoped></style>
