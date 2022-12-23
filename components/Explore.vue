<template>
  <section>
    <div
      class="md:container md:mx-auto items-center justify-center bg-base-100 py-5"
    >
      <div class="flex flex-col w-full max-w-full">
        <div>
          <h2 class="font-heading text-3xl text-primary font-normal">
            Explore More Schools in {{ school?.school_city }}
          </h2>
        </div>
      </div>
      <div
        class="carousel md:carousel-center rounded-box py-5 p-4 space-x-8 bg-neutral md:justify-center"
      >
        <div
          class="carousel-item"
          v-for="item in fetchedschools"
          :key="item.school_id"
        >
          <NuxtLink :to="`http://localhost:3000/${item.perma_link}`">
            <div class="card w-64 h-72 md:h-96 md:w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div class="card-body">
                <p class="text-info text-base">{{ item.school_city }}</p>
                <h2 class="card-title font-heading text-lg md:text-xl">
                  {{ item.school_name }}
                </h2>
                <p>{{ item.school_board }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSchoolStore } from "~~/stores/school";
const schoolStore = useSchoolStore();
const school = schoolStore.jsonData;
const selectedSchoolId = school.school_id;

const { data: fetchedschools } = await useFetch("/api/FetchMoreSchools", {
  method: "POST",
  body: {
    id: selectedSchoolId,
    city: school.school_city,
  },
});
</script>

<style scoped></style>
