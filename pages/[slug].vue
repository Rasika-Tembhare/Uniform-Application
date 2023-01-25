<template>
  <Head>
    <Title>Uniform Application | {{ school?.school_name }}</Title>
    <Meta name="description" :content="school?.alt_name" />
  </Head>
  <div class="p-5 m-5 md:m-8 md:p-8">
    <LazySchoolDetails />
    <LazySchoolInformation />
    <LazyFeeStructure />
    <LazyAdmission />
    <LazyFacilities />
    <LazyDescription />
    <LazyLocation />
    <LazyContactDetails />
    <LazyFaq />
    <LazyReview />
    <LazyExplore />
  </div>
</template>

<script setup lang="ts">
import { useSchoolStore } from "~~/stores/school";
// import { useReviewStore } from "~~/stores/review";

const route = useRoute();
const slug = route.params.slug;
const url = `http://localhost:3000/${slug}`;

const schoolStore = useSchoolStore();

schoolStore.setData(slug as string);
const school = schoolStore.jsonData;
school === "" && useRouter().push("/404Error");
// const reviewStore = useReviewStore();
// reviewStore.setData(slug as string);
// const review = reviewStore.jsonData;
// const { data: school } = await useFetch("/api/fetchSchool", {
//   method: "POST",
//   body: slug,
// });
</script>

<style scoped></style>
