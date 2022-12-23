<template>
  <section>
    <div
      class="md:container md:mx-auto items-center justify-center bg-base-100 py-5"
    >
      <div class="flex flex-col md:flex-row w-full max-w-full">
        <div
          tabindex="0"
          class="collapse collapse-plus border border-base-300 bg-gray-100 rounded-box w-full"
        >
          <input type="checkbox" />
          <div
            class="font-heading collapse-title text-2xl font-medium text-primary"
          >
            School Information
          </div>
          <div class="collapse-content">
            <div class="overflow-x-auto relative">
              <table class="table-auto w-full md:w-full">
                <tbody class="bg-secondary">
                  <!-- row 1 -->
                  <tr>
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>School Board</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200 text-info">
                      <div
                        v-for="board in boards"
                        v-if="!(typeof boards === 'string')"
                      >
                        <a
                          v-if="
                            board.trim() == `IGCSE(Cambridge)` ||
                            board.trim() === 'IGCSE'
                          "
                          href="https://uniformapp.in/blog/full-form-of-igcse/"
                          >{{ board.trim() }}&nbsp;</a
                        >
                        <a
                          v-else
                          :href="`https://uniformapp.in/blog/${board.trim()}-full-form/`"
                          >{{ board.trim() }}&nbsp;</a
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
                      (school?.sch_hostel == 'Day School' ||
                        school?.sch_hostel == 'Day cum Residential School') &&
                      school?.res_fees != '' &&
                      school?.day_fees != 0
                    "
                  >
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Average Day Fees</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ (school?.day_fees * 12).toFixed(1) }} per year
                    </td>
                  </tr>
                  <tr
                    v-if="
                      (school?.sch_hostel == 'Residential School' ||
                        school?.sch_hostel == 'Day cum Residential School') &&
                      school?.res_fees != '' &&
                      school?.day_fees != 0
                    "
                  >
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Average Residential Fees</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ (school?.res_fees * 12).toFixed(1) }}
                    </td>
                  </tr>
                  <tr v-if="school?.alt_name != ''">
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
                <h3
                  class="flex flex-row font-heading text-primary text-lg font-medium py-2"
                  v-if="
                    school?.principal_name != '' ||
                    school?.principal_degree != '' ||
                    school?.principal_exp_t != '' ||
                    school?.principal_exp_a != ''
                  "
                >
                  Principal's Details:
                </h3>
                <tbody
                  class="bg-secondary"
                  v-if="
                    school?.principal_name != '' ||
                    school?.principal_degree != '' ||
                    school?.principal_exp_t != '' ||
                    school?.principal_exp_a != ''
                  "
                >
                  <!-- row1  -->
                  <tr v-if="school?.principal_name != ''">
                    <td class="w-p-2 border-b border-b-gray-200">
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
                      {{ school?.principal_exp_t }}
                    </td>
                  </tr>
                  <tr v-if="school?.principal_exp_a != ''">
                    <td class="p-2 border-b border-b-gray-200">
                      <strong>Principal's Admin Experience</strong>
                    </td>
                    <td class="p-2 border-b border-b-gray-200">
                      {{ school?.principal_exp_a }}
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

// const avg_day_fees = round(school?.day_fees*12)

// const sch_board = school.value.school_board;
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
</script>

<style scoped></style>
