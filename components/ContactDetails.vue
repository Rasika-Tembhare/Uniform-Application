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
            Contact Details
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
            <div class="container justify-center flex flex-row md:gap-32">
              <!-- <div
                class="bg-white order-2 md:order-1 py-4 max-w-xl p-6 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div class="text-lg text-center">Call for Admission</div>
                <div class="flex gap-2 text-center">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp89_wwPzd-JzYOskOD00TdRze5T9oNlgFOG6-tXIksA&s"
                      alt="call"
                      class="w-8 h-8"
                    />
                  </div>
                  <div class="py-1">
                    <span class="pc-ad"> +919821373374</span>
                    <span class="tab-ad"> / +919821373374</span>
                  </div>
                </div>
              </div> -->
              <div
                class="bg-secondary order-2 md:order-1 py-2 md:w-full max-w-xl p-6 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div class="text-lg text-center">School's Contact</div>
                <div class="flex gap-2 py-2">
                  <div class="text-lg text-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                      alt="call"
                      class="w-8 h-8"
                    />
                  </div>
                  <div class="py-1 text-center">
                    <span class="">{{ school?.school_email }}</span>
                  </div>
                </div>
                <div class="flex gap-2 py-2" v-if="school?.school_contact != 0">
                  <div class="text-lg text-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp89_wwPzd-JzYOskOD00TdRze5T9oNlgFOG6-tXIksA&s"
                      alt="call"
                      class="w-8 h-8"
                    />
                  </div>
                  <div class="py-1 text-center">
                    <span class="">{{ school?.school_contact }}</span>
                  </div>
                </div>
                <div class="flex gap-2 py-2">
                  <div class="text-lg text-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
                      alt="call"
                      class="w-8 h-8"
                    />
                  </div>
                  <div class="py-1 md:text-center overflow-x-auto">
                    <span class="hover:text-info">
                      <a :href="school?.school_web" rel="nofollow">{{
                        school?.school_web
                      }}</a></span
                    >
                  </div>
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
.container {
  /* Mobile by default as Roy pointed out */
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  /* For desktops */
  .container {
    flex-direction: row;
  }
}
</style>
