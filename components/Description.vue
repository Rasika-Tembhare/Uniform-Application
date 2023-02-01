<template>
  <section v-if="school?.school_desc !== ''">
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
            Description
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
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <!-- Table -->
                  <table
                    class="rounded-2xl md:rounded-2xl m-5 w-full mx-auto bg-white text-gray-800"
                  >
                    <tbody>
                      <tr class="text-left">
                        <td class="px-4 py-3">
                          <div
                            v-if="school?.school_desc !== ''"
                            class="w-full justify-items-center leading-normal"
                          >
                            <div
                              class="title"
                              v-html="school?.school_desc"
                            ></div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
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
.title :deep() h3 {
  font-size: 1.125rem /* 18px */;
  line-height: 1.75rem /* 28px */;
  font-weight: 500;
  color: #000000;
  font-family: Poppins, sans-serif;
  margin-top: 20px;
  margin-bottom: 10px;
}
@media (min-width: 768px) {
  .title :deep() h3 {
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
    font-weight: 500;
    color: #000000;
    font-family: Poppins, sans-serif;
    margin-top: 20px;
    margin-bottom: 10px;
  }
}
</style>
