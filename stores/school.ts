// import { defineStore } from "pinia";
export const useSchoolStore = defineStore("counter", () => {
  const jsonData = ref();
  async function setData(slug: string) {
    const response = await useFetch("/api/fetchSchool", {
      method: "POST",
      body: slug,
    });
    // console.log(response.data.value);
    jsonData.value = response.data.value;
  }

  return { jsonData, setData };
});
