<template>
  <div>
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-2" class="modal-toggle" />

    <div class="modal">
      <div class="modal-box">
        <label
          for="my-modal-2"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="text-center font-bold text-lg md:text-xl pb-2 md:pb-4">
          How is {{ school?.school_name }} , {{ school?.school_city }}
        </h3>
        <form action="">
          <div
            class="container max-w-sm mx-auto md:flex-1 flex flex-col items-center justify-center px-2"
          >
            <div class="bg-white px-6 rounded shadow-md text-black w-full">
              <input
                type="hidden"
                name="school_id"
                :value="school?.school_id"
              />

              <label class="label">
                <span class="label-text text-sm md:text-base"
                  >Please enter Your Name</span
                >
              </label>
              <input
                v-model="name"
                type="text"
                class="input input-bordered input-md md:w-full w-64 max-w-xs"
                name=""
                placeholder="Name"
                required
              />

              <label class="label">
                <span class="label-text text-sm md:text-base"
                  >Please enter Your Contact</span
                >
              </label>
              <input
                v-model="contact"
                type="text"
                class="input input-bordered input-md md:w-full w-64 max-w-xs"
                name=""
                placeholder=" Contact"
                required
              />
              <label class="label">
                <span class="label-text text-sm md:text-base"
                  >Please enter Your Email</span
                >
              </label>
              <input
                v-model="email"
                type="text"
                class="input input-bordered input-md md:w-full w-64 max-w-xs"
                name=""
                placeholder=" Email"
                required
              />
              <label class="label">
                <span class="label-text text-sm md:text-base"
                  >Please enter Your Rating</span
                >
              </label>
              <select
                v-model="selectRate"
                class="select select-bordered select-md md:w-full w-64 max-w-xs"
                required
              >
                <option value="" disabled selected>Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <label class="label">
                <span class="label-text text-sm md:text-base"
                  >Please enter Your Review</span
                >
              </label>
              <textarea
                v-model="review"
                class="textarea textarea-bordered md:w-full w-64 max-w-xs"
                placeholder=" Review"
                cols="50"
                required
              ></textarea>

              <div class="modal-action">
                <button
                  @submit="saveReview"
                  type="submit"
                  class="btn btn-accent btn-md md:w-full w-64 max-w-xs text-center text-white hover:bg-green-dark my-1"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSchoolStore } from "~~/stores/school";
const schoolStore = useSchoolStore();
const school = schoolStore.jsonData;
const sch_id = school?.school_id;

const name = ref("");
const contact = ref("");
const email = ref("");
const selectRate = ref("");
const review = ref("");

function saveReview() {
  console.log(name.value);
  console.log(contact.value);
  console.log(email.value);

  console.log(selectRate.value);
  console.log(review.value);
}
//   const writeReview = await useFetch("http://localhost:3000/api/writeReview", {
//     method: "POST",
//     body: {
//       name: name.value,
//       contact: contact.value,
//       email: email.value,
//       review: review.value,
//       rating: selectRate.value,
//     },
//   });
// }
// const handleSubmit = async () => {
//   try {
//     saveReview();
//   } catch (error) {
//     console.log(error);
//   }
// };
// const { data: writeReview } = await useFetch("/api/writeReview", {
//   method: "POST",
//   body: {
//     name: name.value,
//     contact: contact.value,
//     email: email.value,
//     review: review.value,
//     rating: selectRate.value,
//   },
// });
</script>

<style scoped></style>
