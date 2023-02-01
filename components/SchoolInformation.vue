<template>
  <section>
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
            School Information
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
              class="overflow-x-auto relative border border-base-100 rounded-2xl md:rounded-2xl"
            >
              <table class="table-auto w-full md:w-full">
                <tbody class="bg-secondary">
                  <!-- row 1 -->
                  <tr>
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>School Board</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200 text-info">
                      <div
                        v-for="(board, index) in boards"
                        v-if="!(typeof boards === 'string')"
                      >
                        <a
                          v-if="
                            board.trim() == `IGCSE(Cambridge)` ||
                            board.trim() === 'IGCSE'
                          "
                          href="https://uniformapp.in/blog/full-form-of-igcse/"
                          >{{ board.trim()
                          }}{{ index < boards.length - 1 ? ", " : "" }}&nbsp;</a
                        >
                        <a
                          v-else-if="
                            board.trim() == `State Board` ||
                            board.trim() === 'Pre-School'
                          "
                          >{{ board.trim()
                          }}{{ index < boards.length - 1 ? ", " : "" }}&nbsp;</a
                        >
                        <a
                          v-else
                          :href="`https://uniformapp.in/blog/${board.trim()}-full-form/`"
                          >{{ board.trim()
                          }}{{ index < boards.length - 1 ? ", " : "" }}&nbsp;</a
                        >
                      </div>
                      <div v-else>
                        <a
                          :href="`https://uniformapp.in/blog/${boards.trim()}-full-form/`"
                          >{{ boards.trim() }}&nbsp;</a
                        >
                      </div>
                    </td>
                  </tr>
                  <!-- row 2 -->
                  <tr>
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Type</strong>
                    </td>
                    <td
                      class="p-2 border-b border-b-gray-200"
                      v-if="school?.school_gender == 'Co-Education'"
                    >
                      {{ school?.school_gender }}
                    </td>
                    <td class="p-2 border-b border-b-gray-200" v-else>
                      {{ school?.school_gender }}
                    </td>
                  </tr>
                  <!-- row 3 -->
                  <tr>
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Address</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.school_addr }},{{ school?.school_area }},{{
                        school?.school_city
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Hostel Facility</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.school_hostel }}
                    </td>
                  </tr>
                  <tr
                    v-if="
                      (school?.school_hostel == 'Day School' ||
                        school?.school_hostel ==
                          'Day cum Residential School') &&
                      school?.avg_fees_day != '' &&
                      school?.avg_fees_day != null
                    "
                  >
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Average Day Fees</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      &#x20B9; {{ (school?.avg_fees_day * 12).toFixed(0) }} per
                      year
                    </td>
                  </tr>
                  <tr
                    v-if="
                      (school?.school_hostel == 'Residential School' ||
                        school?.school_hostel ==
                          'Day cum Residential School') &&
                      school?.avg_fees_residential != '' &&
                      school?.avg_fees_day != null
                    "
                  >
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Average Residential Fees</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      &#x20B9;{{
                        (school?.avg_fees_residential * 12).toFixed(0)
                      }}
                      per year
                    </td>
                  </tr>
                  <tr v-if="school?.alt_name != '' && school?.alt_name != null">
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>School Also Known As</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.alt_name }}
                    </td>
                  </tr>
                  <tr v-if="school?.school_level != ''">
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>School Level</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.school_level }}
                    </td>
                  </tr>
                  <tr v-if="school?.established_year != ''">
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Established Year</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.established_year }}
                    </td>
                  </tr>
                  <tr v-if="school?.medium != ''">
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Medium of Instruction</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.medium }}
                    </td>
                  </tr>
                  <tr v-if="school?.area_camp != ''">
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Area of Campus</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.area_camp }}
                    </td>
                  </tr>
                  <tr v-if="school?.affil_num != ''">
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Affiliation Number</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.affil_num }}
                    </td>
                  </tr>
                  <tr v-if="school?.society_name != ''">
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Society</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.society_name }}
                    </td>
                  </tr>
                </tbody>

                <tbody
                  class="bg-secondary"
                  v-if="
                    school?.principal_name != '' ||
                    school?.principal_degree != '' ||
                    school?.principal_exp_t != '' ||
                    school?.principal_exp_a != ''
                  "
                >
                  <tr>
                    <td class="p-2 border-b border-b-gray-200">
                      <h3
                        class="flex flex-row font-heading text-primary text-lg font-medium py-2"
                      >
                        <strong> Principal's Details:</strong>
                      </h3>
                    </td>
                    <td class="p-2 border-b border-b-gray-200"></td>
                  </tr>
                  <!-- row1  -->
                  <tr v-if="school?.principal_name != ''">
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Principal's Name</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.principal_name }}
                    </td>
                  </tr>
                  <tr v-if="school?.principal_degree != ''">
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Principal's Degree</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.principal_degree }}
                    </td>
                  </tr>
                  <tr v-if="school?.principal_exp_t != ''">
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Principal's Teaching Experience</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.principal_exp_t }} years
                    </td>
                  </tr>
                  <tr v-if="school?.principal_exp_a != ''">
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Principal's Admin Experience</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.principal_exp_a }} years
                    </td>
                  </tr>
                </tbody>
              </table>
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

let boards = school?.school_board.trim();
if (boards.indexOf(",") !== -1) {
  boards = boards.split(",");
}
if (boards.indexOf("and") !== -1) {
  boards = boards.split("and");
}
// for(let board of boards) {
//   if(board == "IGCSE(Cambridge)")
// }
const description = school?.school_desc;

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

<style scoped></style>
