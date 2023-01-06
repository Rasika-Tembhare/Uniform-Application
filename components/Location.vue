<template>
  <section
    v-if="
      school?.n_railway !== '' ||
      school?.n_railway_d !== '' ||
      school?.n_police !== '' ||
      school?.n_police_d !== '' ||
      school?.n_bank !== '' ||
      school?.n_bank_d !== ''
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
            Location Details
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
              class="overflow-x-auto relative border border-base-200 rounded-2xl md:rounded-2xl shadow-md"
            >
              <table class="table-auto w-full md:w-full">
                <tbody class="bg-secondary">
                  <!-- row 1 -->
                  <tr v-if="school?.n_railway != ''">
                    <td class="p-2 border-b border-b-gray-200 w-1/2">
                      Nearest Railway Station
                    </td>
                    <td class="p-2 border-b border-b-gray-200 w-1/2">
                      {{ school?.n_railway }}
                    </td>
                  </tr>
                  <!-- row 2 -->
                  <tr v-if="school?.n_railway_d != ''">
                    <td class="p-2 border-b border-b-gray-200 w-1/2">
                      Nearest Railway Station Distance
                    </td>
                    <td class="p-2 border-b border-b-gray-200 w-1/2">
                      {{ school?.n_railway_d }} km
                    </td>
                  </tr>
                  <!-- row 3 -->
                  <tr v-if="school?.n_police != ''">
                    <td class="p-2 border-b border-b-gray-200 w-1/2">
                      Nearest Police Station
                    </td>
                    <td class="p-2 border-b border-b-gray-200 w-1/2">
                      {{ school?.n_police }}
                    </td>
                  </tr>
                  <tr v-if="school?.n_police_d != ''">
                    <td class="p-2 border-b border-b-gray-200 w-1/2">
                      Nearest Police Station Distance
                    </td>
                    <td class="p-2 border-b border-b-gray-200 w-1/2">
                      {{ school?.n_police_d }} km
                    </td>
                  </tr>
                  <tr v-if="school?.n_bank != ''">
                    <td class="p-2 border-b border-b-gray-200 w-1/2">
                      Nearest Bank
                    </td>
                    <td class="p-2 border-b border-b-gray-200 w-1/2">
                      {{ school?.n_bank }}
                    </td>
                  </tr>
                  <tr v-if="school?.n_bank_d != ''">
                    <td class="p-2 border-b border-b-gray-200 w-1/2">
                      Nearest Bank Distance
                    </td>
                    <td class="p-2 border-b border-b-gray-200 w-1/2">
                      {{ school?.n_bank_d }} km
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
