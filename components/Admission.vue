<template>
  <section
    v-if="
      school?.admission_update !== '' ||
      school?.admission_update_new !== '' ||
      school?.admission_crit !== ''
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
            Admission Details
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
              class="bg-white py-4 max-w-64 p-6 border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <ul class="list-reset flex flex-col">
                <li
                  v-if="showDiv"
                  class="rounded-t relative -mb-px block border p-4 border-grey"
                >
                  <div class="font-bold text-left">Admission Update</div>
                  <!-- <div v-if="school?.admission_update == ''" class="text-center">Coming Soon</div> -->
                  <div
                    v-if="school?.admission_update !== ''"
                    v-html="school?.admission_update"
                    class="text-left"
                  ></div>
                </li>
                <li
                  v-if="showDiv2"
                  class="relative -mb-px block border p-4 border-grey"
                >
                  <div class="font-bold text-left">Admission Update(New)</div>
                  <div
                    v-if="school?.admission_update_new == ''"
                    class="text-left"
                  >
                    ---
                  </div>
                  <div
                    v-if="school?.admission_update_new !== ''"
                    class="text-left"
                    v-html="school?.admission_update_new"
                  ></div>
                </li>
                <li
                  v-if="showDiv3"
                  class="relative -mb-px block border p-4 border-grey"
                >
                  <div class="font-bold text-left">Admission Criteria</div>
                  <div v-if="school?.admission_crit == ''" class="text-center">
                    ---
                  </div>
                  <div
                    v-if="school?.admission_crit !== ''"
                    v-html="school?.admission_crit"
                    class="text-left overflow-x-auto relative table-auto justify-items-center"
                  ></div>
                </li>
              </ul>
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

const showDiv = ref(true);
const showDiv2 = ref(true);
const showDiv3 = ref(true);
if (school?.admission_update == "") {
  showDiv.value = false;
}
if (school?.admission_update_new == "") {
  showDiv2.value = false;
}
if (school?.admission_crit == "") {
  showDiv3.value = false;
}

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
