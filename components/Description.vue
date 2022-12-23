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
          <div
            class="font-heading collapse-title text-2xl font-medium text-primary"
          >
            Description
          </div>
          <div class="collapse-content">
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <table
                    class="rounded-t-lg m-5 w-full mx-auto bg-white text-gray-800"
                  >
                    <tr class="text-left border-gray-300">
                      <!-- <th class="px-4 py-3 text-top">Description:</th> -->
                      <td class="px-4 py-3">
                        <p
                          v-if="school?.school_desc !== ''"
                          v-html="school?.school_desc"
                        ></p>
                      </td>
                    </tr>
                    <!-- <tr class="text-left border-b-2 border-gray-300">
                <th class="px-4 py-3">Description:</th>
                <td class="px-4 py-3">
                  <p v-if="school?.school_desc !== ''">
                    {{ school?.school_desc }}
                  </p>
                </td>
              </tr> -->
                  </table>
                </div>
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
</script>

<style scoped></style>
