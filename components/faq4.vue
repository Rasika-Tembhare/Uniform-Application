<template>
  <div
    tabindex="0"
    class="collapse collapse-open border border-base-300 bg-gray-100 rounded-box w-full shadow-md"
    @click="toggle"
  >
    <div
      class="collapse-title text-lg font-medium cursor-pointer text-primary flex md:flex-row justify-between"
      @click="isHidden = !isHidden"
    >
      <span> Is this school co-educational? </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 inline-block float-right"
        v-if="showSvg1"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
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
      <p
        v-if="
          school?.school_gender == 'Co-Ed School' ||
          school?.school_gender == 'Co-Education' ||
          school?.school_gender == 'Co Education'
        "
      >
        Yes, {{ school?.school_name }}, {{ school?.school_city }} is
        co-educational. This school offers education irrespective of the
        student&apos;s gender.
      </p>
      <p v-else>
        No, {{ school?.school_name }}, {{ school?.school_city }} is not
        co-educational.
      </p>
    </div>
  </div>
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
