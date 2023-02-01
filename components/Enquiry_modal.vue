<template>
  <div>
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-1" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative text-center">
        <!-- Enquiry Form  -->
        <form>
          <input type="hidden" name="school_id" :value="school?.school_id" />
          <label
            for="my-modal-1"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            >✕</label
          >
          <h3 class="md:text-lg text-base font-bold">
            Search Schools At One Place
          </h3>
          <p class="py-2">Sign Up / Login Now To Apply</p>
          <div
            class="container max-w-sm mx-auto md:flex-1 flex flex-col items-center justify-center px-2"
          >
            <div class="bg-white px-6 rounded shadow-md text-black w-full">
              <label class="label">
                <span class="label-text text-sm md:text-base"
                  >Please enter Your Full Name</span
                >
              </label>
              <input
                v-model="fname"
                type="text"
                class="input input-bordered w-full max-w-xs"
                name="fullname"
                placeholder="Full Name"
                required
              />
              <label class="label">
                <span class="label-text text-sm md:text-base"
                  >Please enter Your Mobile Number</span
                >
              </label>
              <input
                v-model="mob"
                type="text"
                class="input input-bordered w-full max-w-xs"
                name="phone"
                placeholder="Mobile Number"
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
                class="input input-bordered input-md w-full max-w-xs mb-4"
                name=""
                placeholder=" Email"
                required
              />
              <select
                v-model="selectClass"
                class="select select-bordered w-full max-w-xs"
                required
              >
                <option value="">Select Class</option>
                <option value="Pre Nursery">Pre Nursery</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
              </select>

              <div class="modal-action">
                <button
                  @click="saveDetail"
                  type="submit"
                  class="btn btn-accent btn-md w-full max-w-xs text-center text-white hover:bg-green-dark my-1"
                >
                  <label for="my-modal-1"></label> Save
                </button>
              </div>

              <div class="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  class="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </a>
                and
                <a
                  class="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div class="text-grey-dark md:mt-6 mt-3">
              Already have an account?
              <a
                class="no-underline border-b border-blue text-blue"
                href="../login/"
              >
                Log in </a
              >.
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

const fname = ref("");
const mob = ref("");
const email = ref("");
const selectClass = ref("");

async function saveDetail() {
  // console.log(fname.value);
  // console.log(mob.value);
  // console.log(email.value);
  // console.log(selectClass.value);
  const { data: res } = await useFetch("/api/writeEnquiry", {
    method: "POST",
    body: {
      fname: fname,
      mob: mob,
      email: email,
      selectClass: selectClass,
      school_id: school.school_id,
    },
  });
  // console.log(res.value);
}
</script>

<style scoped></style>
