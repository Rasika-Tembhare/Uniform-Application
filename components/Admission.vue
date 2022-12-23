<template>
  <section>
    <div
      class="md:container md:mx-auto items-center justify-center bg-base-100 py-5"
    >
      <div class="flex flex-col md:flex-row w-full max-w-full">
        <div
          tabindex="0"
          class="collapse collapse-plus border border-base-300 rounded-box w-full bg-gray-100"
        >
          <input type="checkbox" />
          <div class="collapse-title text-2xl font-medium text-primary">
            Admission Details
          </div>
          <div class="collapse-content">
            <div
              class="bg-white py-4 max-w-64 p-6 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <ul class="list-reset flex flex-col">
                <li
                  class="rounded-t relative -mb-px block border p-4 border-grey"
                >
                  <div class="font-bold text-center">Admission Update</div>
                  <div
                    v-if="school?.admission_update == ''"
                    class="text-center"
                  >
                    Coming Soon
                  </div>
                  <div
                    v-if="school?.admission_update !== ''"
                    v-html="school?.admission_update"
                    class="text-center"
                  ></div>
                </li>
                <li class="relative -mb-px block border p-4 border-grey">
                  <div class="font-bold text-center">Admission Update(New)</div>
                  <div
                    v-if="school?.admission_update_new == ''"
                    class="text-center"
                  >
                    ---
                  </div>
                  <div
                    v-if="school?.admission_update_new !== ''"
                    class="text-center"
                    v-html="school?.admission_update_new"
                  ></div>
                </li>
                <li class="relative -mb-px block border p-4 border-grey">
                  <div class="font-bold text-center">Admission Criteria</div>
                  <div v-if="school?.admission_crit == ''" class="text-center">
                    ---
                  </div>
                  <div
                    v-if="school?.admission_crit !== ''"
                    v-html="school?.admission_crit"
                    class="text-center"
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
</script>

<style scoped></style>
