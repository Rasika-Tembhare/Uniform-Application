<template>
  <section
    v-if="
      school?.transport == 'Yes' ||
      school?.indoor_sports == 'Yes' ||
      school?.outdoor_sports == 'Yes' ||
      school?.ac_classes == 'Yes' ||
      school?.swim_pool == 'Yes' ||
      school?.music_room == 'Yes' ||
      school?.dance_room == 'Yes' ||
      school?.gym_room == 'Yes' ||
      school?.health_check_up == 'Yes'
    "
  >
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
            Facilities
          </div>
          <div class="collapse-content flex flex-col md:flex-row items-center">
            <div v-if="school?.transport == 'Yes'">
              <figure class="p-5 inline-block">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/257/257688.png"
                  alt="transport"
                  class="w-32 md:w-36"
                />
              </figure>

              <figcaption class="text-xl items-center text-primary pl-10">
                Transport
              </figcaption>
            </div>
            <div v-if="school?.indoor_sports == 'Yes'">
              <figure class="p-5 inline-block">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/257/257680.png"
                  alt="indoor sports"
                  class="w-32 md:w-36"
                />
              </figure>

              <figcaption class="text-xl items-center text-primary pl-10">
                Indoor Sports
              </figcaption>
            </div>
            <div v-if="school?.outdoor_sports == 'Yes'">
              <figure class="p-5 inline-block">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4689/4689371.png"
                  alt="outdoor sports"
                  class="w-32 md:w-36"
                />
              </figure>

              <figcaption class="text-xl items-center text-primary pl-10">
                Outdoor Sports
              </figcaption>
            </div>
            <div v-if="school?.ac_classes == 'Yes'">
              <figure class="p-5 inline-block">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/720/720307.png"
                  alt="ac clasess"
                  class="w-32 md:w-36"
                />
              </figure>

              <figcaption class="text-xl items-center text-primary pl-10">
                AC Classes
              </figcaption>
            </div>
            <div v-if="school?.swim_pool == 'Yes'">
              <figure class="p-5 inline-block">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3104/3104924.png"
                  alt="swim pool"
                  class="w-32 md:w-36"
                />
              </figure>

              <figcaption class="text-xl items-center text-primary pl-10">
                Swimming Pool
              </figcaption>
            </div>
            <div v-if="school?.music_room == 'Yes'">
              <figure class="p-5 inline-block">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1895/1895657.png"
                  alt="music room"
                  class="w-32 md:w-36"
                />
              </figure>

              <figcaption class="text-xl items-center text-primary pl-10">
                Music Room
              </figcaption>
            </div>
            <div v-if="school?.dance_room == 'Yes'">
              <figure class="p-5 inline-block">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6832/6832877.png"
                  alt="dance room"
                  class="w-32 md:w-36"
                />
              </figure>

              <figcaption class="text-xl items-center text-primary pl-10">
                Dance Room
              </figcaption>
            </div>
            <div v-if="school?.gym_room == 'Yes'">
              <figure class="p-5 inline-block">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/249/249187.png"
                  alt="gym room"
                  class="w-32 md:w-36"
                />
              </figure>

              <figcaption class="text-xl items-center text-primary pl-10">
                Gym Room
              </figcaption>
            </div>
            <div v-if="school?.health_check_up == 'Yes'">
              <figure class="p-5 inline-block">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8890/8890546.png"
                  alt="health checkup"
                  class="w-32 md:w-36"
                />
              </figure>

              <figcaption class="text-xl items-center text-primary pl-10">
                Health Checkup
              </figcaption>
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
