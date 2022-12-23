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
            Contact Details
          </div>
          <div class="collapse-content">
            <div class="container justify-center flex flex-row md:gap-32">
              <div
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
              </div>
              <div
                class="bg-white order-2 md:order-1 py-2 max-w-xl p-6 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
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
                    <span class="pc-ad">{{ school?.school_email }}</span>
                  </div>
                </div>
                <div class="flex gap-2 py-2">
                  <div class="text-lg text-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1048/1048947.png"
                      alt="call"
                      class="w-8 h-8"
                    />
                  </div>
                  <div class="py-1 text-center">
                    <span class="pc-ad">{{ school?.school_contact }}</span>
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
                  <div class="py-1 text-center">
                    <span class="pc-ad">{{ school?.school_web }}</span>
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
