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
      <span> What facilities are available in this school? </span>
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
      <p>
        {{ school?.school_name }}, {{ school?.school_city }} offers the
        following facilities:
        <label v-if="school?.transport">{{ "Transportation," }}</label>
        <label v-if="school?.indoor_sports">{{ "Indoor Sports," }}</label>
        <label v-if="school?.outdoor_sports">{{ "Outdoor Sports," }}</label>
        <label v-if="school?.ac_classes">{{ "AC Classes," }}</label>
        <label v-if="school?.swim_pool">{{ "Swimming Pool." }}</label>
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
