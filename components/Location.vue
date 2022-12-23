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
      <div class="flex flex-col w-full max-w-full">
        <div
          tabindex="0"
          class="collapse collapse-plus border border-base-300 bg-gray-100 rounded-box w-full"
        >
          <input type="checkbox" />
          <div
            class="font-heading collapse-title text-2xl font-medium text-primary"
          >
            Location Details
          </div>
          <div class="collapse-content">
            <div class="overflow-x-auto relative">
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
</script>

<style scoped></style>
