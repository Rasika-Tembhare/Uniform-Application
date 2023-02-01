<template>
  <section
    v-if="
      (school?.day_fees !== '' && school?.day_fees !== null) ||
      (school?.residential_fees !== '' && school?.residential_fees !== null) ||
      (school?.avg_fees_day !== '' && school?.avg_fees_day !== null) ||
      (school?.avg_fees_residential !== '' && school?.avg_fees_day !== null)
    "
  >
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
            Fee Details
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
            <div class="flex flex-col gap-8 py-2 m-auto md:flex-row">
              <!-- Card-1 -->
              <div class="grid grid-rows-2 grid-flow-col gap-2">
                <div
                  class="stats shadow overflow-hidden md:w-48 w-42 justify-center md:justify-between"
                >
                  <div class="stat">
                    <div class="stat-title text-xl text-red-600">
                      Total Cost
                    </div>
                    <div
                      class="stat-value text-lg"
                      v-if="school?.avg_fees_day !== null"
                      v-html="(school?.avg_fees_day * 12).toFixed(0)"
                    ></div>
                    <div
                      class="stat-value text-lg"
                      v-else-if="school?.avg_fees_residential !== null"
                      v-html="(school?.avg_fees_residential * 12).toFixed(0)"
                    ></div>
                    <div
                      class="stat-value text-lg"
                      v-else="
                        school?.avg_fees_day == null &&
                        school?.avg_fees_residential == null
                      "
                    >
                      NA
                    </div>

                    <div class="stat-desc text-sm text-blue-400">
                      What is total cost?
                    </div>
                  </div>
                </div>
                <div
                  class="stats shadow overflow-hidden md:w-48 w-42 justify-center md:justify-between"
                >
                  <div class="stat">
                    <div class="stat-title text-xl text-red-600">
                      Monthly Cost
                    </div>
                    <div
                      class="stat-value text-lg"
                      v-if="school?.avg_fees_day !== null"
                      v-html="(school?.avg_fees_day * 1).toFixed(0)"
                    ></div>
                    <div
                      class="stat-value text-lg"
                      v-else-if="school?.avg_fees_residential !== null"
                      v-html="(school?.avg_fees_residential * 1).toFixed(0)"
                    ></div>
                    <div
                      class="stat-value text-lg"
                      v-else="
                        school?.avg_fees_day == null &&
                        school?.avg_fees_residential == null
                      "
                    >
                      NA
                    </div>

                    <div class="stat-desc text-sm text-blue-400">
                      What is monthly cost?
                    </div>
                  </div>
                </div>
              </div>
              <!-- Table -->

              <div class="stats overflow-x-auto relative w-full">
                <table
                  class="container rounded-t-lg md:w-full border border-base-100 shadow-md"
                >
                  <thead class="bg-gray-200">
                    <tr class="hover:shadow-lg hover:border-transparent">
                      <th
                        class="font-bold text-lg md:text-xl text-center md:text-center text-gray-900 py-4"
                      >
                        Type
                      </th>
                      <th
                        class="font-bold text-lg md:text-xl text-center md:text-center text-gray-900"
                      >
                        Amount
                      </th>
                      <th
                        class="font-bold text-lg md:text-xl text-center md:text-center text-gray-900 pl-2"
                      >
                        Frequency
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- <tr class="bg-white border-b hover:bg-red-500">
                      <td class="py-2 md:text-center">Day Fees</td>
                      <td
                        class="py-2 md:text-center"
                        v-if="school?.day_fees == null"
                      >
                        NA
                      </td>
                      <td
                        class="py-2 md:text-center"
                        v-if="school?.day_fees !== null"
                        v-html="school?.day_fees"
                      ></td>
                      <td class="py-2 md:text-center pl-2">One Time</td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-red-500">
                      <td class="py-2 md:text-center">Residential Fees</td>
                      <td
                        class="py-2 md:text-center"
                        v-if="school?.residential_fees == null"
                      >
                        NA
                      </td>
                      <td
                        class="py-2 md:text-center"
                        v-if="school?.residential_fees !== null"
                        v-html="school?.residential_fees"
                      ></td>
                      <td class="py-2 md:text-center pl-2">One Time</td>
                    </tr> -->
                    <tr class="bg-white border-b hover:bg-red-500">
                      <td class="py-2 md:text-center">Average Fees(Day)</td>
                      <td
                        class="py-2 md:text-center"
                        v-if="school?.avg_fees_day == null"
                      >
                        NA
                      </td>
                      <td
                        class="py-2 md:text-center"
                        v-if="school?.avg_fees_day !== null"
                        v-html="(school?.avg_fees_day * 12).toFixed(0)"
                      ></td>
                      <td class="py-2 md:text-center pl-2">Annually</td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-red-500">
                      <td class="py-2 md:text-center relative">
                        Average Fees(Residential)
                      </td>
                      <td
                        class="py-2 md:text-center"
                        v-if="school?.avg_fees_residential == null"
                      >
                        NA
                      </td>
                      <td
                        class="py-2 md:text-center"
                        v-if="school?.avg_fees_residential !== null"
                        v-html="(school?.avg_fees_residential * 12).toFixed(0)"
                      ></td>
                      <td class="py-2 md:text-center pl-2">Annually</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSchoolStore } from "~~/stores/school";
const schoolStore = useSchoolStore();
const school = schoolStore.jsonData;
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
</script>

<style scoped>
.grid {
  /* Mobile by default as Roy pointed out */
  display: flex;
  flex-direction: row;
}
@media (min-width: 768px) {
  /* For desktops */
  .grid {
    flex-direction: column;
  }
}
</style>
