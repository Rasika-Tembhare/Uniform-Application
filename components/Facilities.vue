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
          class="collapse collapse-open border border-base-300 rounded-box w-full bg-gray-100 shadow-md"
          @click="toggle"
        >
          <div
            class="font-heading collapse-title text-lg md:text-2xl font-medium cursor-pointer text-primary"
            @click="isHidden = !isHidden"
          >
            Facilities
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
          <div
            class="collapse-content flex flex-row flex-wrap md:flex-row justify-items-center m-2"
            v-if="isHidden"
          >
            <div
              v-if="school?.transport == 'Yes'"
              class="p-5 inline-block flex-wrap"
            >
              <figure>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/257/257688.png"
                  alt="transport"
                  class="w-24 md:w-36 justify-items-center"
                />
                <figcaption
                  class="text-justify md:text-xl justify-items-center text-primary py-4 md:p-5"
                >
                  Transport
                </figcaption>
              </figure>
            </div>

            <div v-if="school?.music_room == 'Yes'" class="p-5 inline-block">
              <figure>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1895/1895657.png"
                  alt="music room"
                  class="w-24 md:w-36 justify-items-center"
                />

                <figcaption
                  class="text-justify md:text-xl justify-items-center text-primary py-4 md:p-5"
                >
                  Music Room
                </figcaption>
              </figure>
            </div>

            <div v-if="school?.indoor_sports == 'Yes'" class="p-5 inline-block">
              <figure>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/257/257680.png"
                  alt="indoor sports"
                  class="w-24 md:w-36 justify-items-center"
                />
                <figcaption
                  class="text-justify md:text-xl justify-items-center text-primary py-4 md:p-5"
                >
                  Indoor Sports
                </figcaption>
              </figure>
            </div>
            <div
              v-if="school?.outdoor_sports == 'Yes'"
              class="p-5 inline-block"
            >
              <figure>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4689/4689371.png"
                  alt="outdoor sports"
                  class="w-24 md:w-36 justify-items-center"
                />

                <figcaption
                  class="text-justify md:text-xl justify-items-center text-primary py-4 md:p-5"
                >
                  Outdoor Sports
                </figcaption>
              </figure>
            </div>
            <div v-if="school?.ac_classes == 'Yes'" class="p-5 inline-block">
              <figure>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/720/720307.png"
                  alt="ac clasess"
                  class="w-24 md:w-36 justify-items-center"
                />
                <figcaption
                  class="text-justify md:text-xl justify-items-center text-primary py-4 md:p-5"
                >
                  AC Classes
                </figcaption>
              </figure>
            </div>

            <div v-if="school?.dance_room == 'Yes'" class="p-5 inline-block">
              <figure>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6832/6832877.png"
                  alt="dance room"
                  class="w-24 md:w-36 justify-items-center"
                />
                <figcaption
                  class="text-justify md:text-xl justify-items-center text-primary py-4 md:p-5"
                >
                  Dance Room
                </figcaption>
              </figure>
            </div>
            <div v-if="school?.swim_pool == 'Yes'" class="p-5 inline-block">
              <figure>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3104/3104924.png"
                  alt="swim pool"
                  class="w-24 md:w-36 justify-items-center"
                />

                <figcaption
                  class="text-justify md:text-xl justify-items-center text-primary py-4 md:p-5"
                >
                  Swimming Pool
                </figcaption>
              </figure>
            </div>

            <div v-if="school?.gym_room == 'Yes'" class="p-5 inline-block">
              <figure>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/249/249187.png"
                  alt="gym room"
                  class="w-24 md:w-36 justify-items-center"
                />

                <figcaption
                  class="text-justify md:text-xl justify-items-center text-primary py-4 md:p-5"
                >
                  Gym Room
                </figcaption>
              </figure>
            </div>

            <div
              v-if="school?.health_check_up == 'Yes'"
              class="p-5 inline-block"
            >
              <figure>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8890/8890546.png"
                  alt="health checkup"
                  class="w-24 md:w-36 justify-items-center"
                />

                <figcaption
                  class="text-justify md:text-xl justify-items-center text-primary py-4 md:p-5"
                >
                  Health Checkup
                </figcaption>
              </figure>
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
