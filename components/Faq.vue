<template>
  <section>
    <div
      class="md:container md:mx-auto items-center justify-center bg-base-100"
    >
      <div class="flex flex-col w-full max-w-full py-5">
        <div class="py-5">
          <h2 class="font-heading text-3xl text-primary font-normal">
            General FAQs
          </h2>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-plus border border-base-300 bg-gray-100 rounded-box w-full"
        >
          <input type="checkbox" />
          <div class="collapse-title text-base md:text-xl font-medium">
            Which board is this school affiliated to?
          </div>
          <div class="collapse-content">
            <p>
              In India all Schools that have classes upto Xth or XIIth have to
              be affiliated to atleast one board of education.{{
                school?.school_name
              }}, {{ school?.school_city }} is affiliated to the the following
              boards: {{ school?.school_board }}.
            </p>
          </div>
        </div>
        <div class="py-2"></div>
        <div
          tabindex="0"
          class="collapse collapse-plus border border-base-300 bg-gray-100 rounded-box w-full"
        >
          <input type="checkbox" />
          <div class="collapse-title text-base md:text-xl font-medium">
            Does this school offer Hostel facility?
          </div>
          <div class="collapse-content">
            <p
              v-if="
                school?.school_hostel == 'No' ||
                school?.school_hostel == '' ||
                school?.school_hostel == 'Day School' ||
                school?.school_hostel == 'NO'
              "
            >
              {{ school?.school_name }}, {{ school?.school_city }} does not
              offer hostel facility. This school does not have any provisions
              for residential scholars. {{ school?.school_name }},
              {{ school?.school_city }} is a Day School.
            </p>
            <p
              v-if="
                school?.school_hostel == 'Yes' ||
                school?.school_hostel == 'Day cum Residential School' ||
                school?.school_hostel == 'Residential School'
              "
            >
              Yes, {{ school?.school_name }}, {{ school?.school_city }} offers
              hostel facility. This school has provisions for residential
              scholars. {{ school?.school_name }}, {{ school?.school_city }} is
              a Residential School.
            </p>
          </div>
        </div>
        <div class="py-2"></div>
        <div
          tabindex="0"
          class="collapse collapse-plus border border-base-300 bg-gray-100 rounded-box w-full"
        >
          <input type="checkbox" />
          <div class="collapse-title text-base md:text-xl font-medium">
            What facilities are available in this school?
          </div>
          <div class="collapse-content">
            <p>
              {{ school?.school_name }}, {{ school?.school_city }} offers the
              following facilities:
              <label v-if="school?.transport">{{ "Transportation," }}</label>
              <label v-if="school?.indoor_sports">{{ "Indoor Sports," }}</label>
              <label v-if="school?.outdoor_sports">{{
                "Outdoor Sports,"
              }}</label>
              <label v-if="school?.ac_classes">{{ "AC Classes," }}</label>
              <label v-if="school?.swim_pool">{{ "Swimming Pool." }}</label>
            </p>
          </div>
        </div>
        <div class="py-2"></div>

        <div
          tabindex="0"
          class="collapse collapse-plus border border-base-300 bg-gray-100 rounded-box w-full"
        >
          <input type="checkbox" />
          <div class="collapse-title text-base md:text-xl font-medium">
            Is this school co-educational?
          </div>
          <div class="collapse-content">
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
