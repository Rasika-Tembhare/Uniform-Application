<template>
  <Head>
    <Title>Uniform Application | {{ school?.school_name }}</Title>
    <Meta name="description" :content="school?.alt_name" />
  </Head>

  <SchoolDetails />
  <SchoolInformation />
  <FeeStructure />
  <Admission />
  <Facilities />
  <Description />
  <Location />
  <ContactDetails />
  <Faq />
  <Review />
  <Explore />
</template>

<script setup lang="ts">
import { useSchoolStore } from "~~/stores/school";
const route = useRoute();
const slug = route.params.slug;
const url = `http://localhost:3000/${slug}`;

const schoolStore = useSchoolStore();

schoolStore.setData(slug as string);
const school = schoolStore.jsonData;
school === "" && useRouter().push("/404Error");
// const { data: school } = await useFetch("/api/fetchSchool", {
//   method: "POST",
//   body: slug,
// });
</script>

<style scoped></style>
