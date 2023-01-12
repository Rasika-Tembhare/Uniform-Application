<template>
  <div
    class="container pb-36 bg-gray-100 pt-4 text-gray-700 grid place-items-center h-10"
  >
    <div>
      <div
        class="text-center lg:text-2xl md:text-xl text-lg lg:p-0 p-1 font-black text-gray-700"
      >
        <h3 class="text-4xl py-4 px-4">School Search</h3>
        <p class="text-sm text-slate-500">
          Find the right school for your child
        </p>
      </div>
      <div class="grid place-items-center shodow py-4">
        <div
          class="bg-white place-items-center justify-between md:w-96 w-full flex rounded-full shadow-lg p-2 mb-5 sticky"
        >
          <input
            v-model="check.school"
            @focus="showDiv = true"
            @input="onClick"
            class="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
            type="text"
            placeholder="Search School"
          />
          <div
            class="bg-gray-200 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full"
            @click="clearInput"
          >
            <svg
              @click="showDiv = false"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div v-if="fetchEntries().length" class="z-40">
          <ul
            v-show="showDiv"
            v-for="item in fetchEntries()"
            v-bind:key="item.school_id"
            @click="setState(item)"
            class="font-bold uppercase text-gray-700 w-62 bg-white-800"
          >
            <li class="border-b cursor-pointer text-gray-700 bg-white">
              <div class="flex flex-cols-2 gap-2 hover:bg-gray-300">
                <div>
                  <img
                    src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-145774,msid-86702803/coggndlf.jpg"
                    class="h-12 w-12 icons"
                  />
                </div>
                <div>
                  {{ item.school_name }}
                  <div class="text-sm text-accent">
                    {{ item.school_city }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div v-else class="z-40">
          <ul class="font-bold uppercase text-gray-700 w-62 bg-white-800">
            <li class="border-b cursor-pointer text-gray-700 bg-white">
              No Product Found for {{ check.school }}
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-4 lg:p-4 p-2 rounded-lg m-2"></div>
      </div>
    </div>
  </div>

  <div
    class="flex flex-col gap-8 md:py-24 py-12 m-auto md:flex-row md:pl-36"
    @click="showDiv = false"
  >
    <div class="md:w-96 w-84 text-center">
      <!-- Search By Location -->
      <div class="collapse py-4 justify-center">
        <input type="checkbox" class="peer" />
        <div
          class="collapse-title bg-white rounded-xl inline-block shadow-lg w-72 text-left"
        >
          Search By Location
          <svg
            class="w-6 h-6 inline-block float-right"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <div class="collapse-content bg-white w-72">
          <div class="py-2">
            <input
              type="text"
              placeholder="Search by city"
              v-model="check.city"
              class="input input-bordered input-error w-full max-w-xs"
            />
          </div>
        </div>
      </div>

      <!-- Filter By Board -->
      <div class="collapse py-4 justify-center">
        <input type="checkbox" class="peer" />
        <div
          class="collapse-title bg-white rounded-xl inline-block shadow-lg w-72 text-left"
        >
          Choose Board
          <svg
            class="w-6 h-6 inline-block float-right"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <div class="collapse-content bg-white w-full">
          <div class="flex flex-1 py-2">
            <ul tabindex="0" class="dropdown-content menu p-2 md:w-full w-full">
              <li>
                <a
                  ><input
                    type="checkbox"
                    value="CBSE"
                    v-model="board.cbse"
                  />CBSE</a
                >
              </li>
              <li>
                <a
                  ><input
                    type="checkbox"
                    value="ICSE"
                    v-model="board.icse"
                  />ICSE</a
                >
              </li>
              <li>
                <a><input type="checkbox" value="IB" v-model="board.ib" />IB</a>
              </li>
              <li>
                <a
                  ><input
                    type="checkbox"
                    value="IGCSE(Cambridge)"
                    v-model="board.igcse"
                  />IGCSE</a
                >
              </li>
              <li>
                <a
                  ><input
                    type="checkbox"
                    value="State Board"
                    v-model="board.state"
                  />State Board</a
                >
              </li>
              <li>
                <a
                  ><input
                    type="checkbox"
                    value="Other board"
                    v-model="board.other"
                  />Other Board</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Filter By Type -->
      <div class="collapse py-4 justify-center">
        <input type="checkbox" class="peer" />
        <div
          class="collapse-title bg-white rounded-xl inline-block shadow-lg w-72 text-left"
        >
          Choose Type
          <svg
            class="w-6 h-6 inline-block float-right"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <div class="collapse-content bg-white w-full">
          <div class="flex flex-1 py-2">
            <ul tabindex="0" class="dropdown-content menu p-2 md:w-full w-full">
              <li>
                <a
                  ><input
                    type="checkbox"
                    value="All Boys"
                    v-model="type.male"
                  />All Boys</a
                >
              </li>
              <li>
                <a
                  ><input
                    type="checkbox"
                    value="All Girls"
                    v-model="type.female"
                  />All Girls</a
                >
              </li>
              <li>
                <a
                  ><input
                    type="checkbox"
                    value="Co-Education"
                    v-model="type.both"
                  />Co-Educational</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Filter By Type -->
      <div class="collapse py-4 justify-center">
        <input type="checkbox" class="peer" />
        <div
          class="collapse-title bg-white rounded-xl inline-block shadow-lg w-72 text-left"
        >
          Choose Hostel Facility
          <svg
            class="w-6 h-6 inline-block float-right"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <div class="collapse-content bg-white w-72">
          <div class="flex flex-1 py-2">
            <ul tabindex="0" class="dropdown-content menu p-2 md:w-full w-full">
              <li>
                <a
                  ><input
                    type="checkbox"
                    value="Day cum Residential School"
                    v-model="hostel.yes"
                  />Yes</a
                >
              </li>
              <li>
                <a
                  ><input
                    type="checkbox"
                    value="Day School"
                    v-model="hostel.no"
                  />No</a
                >
              </li>
              <li>
                <a
                  ><input
                    type="checkbox"
                    value=" "
                    v-model="hostel.both"
                  />Both</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <pre>{{ item.school_name }}</pre>
        <pre>{{ item.school_web }}</pre>
        <pre>{{ item.school_addr }}</pre> -->

    <!-- <div v-for="item in fetchEntries()" v-bind:key="item.school_id" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.school_name }}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ item.school_web }}</p>
      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{ item.school_addr }}
      </a>
    </div> -->

    <div
      class="rounded-xl justify-center py-8 md:py-0 place-items-center md:w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4"
      @click="showDiv = false"
    >
      <div
        class="pl-6 rounded overflow-hidden shadow-lg"
        v-for="item in fetchEntries()"
        v-bind:key="item.school_id"
      >
        <NuxtLink :to="`http://localhost:3000/${item.perma_link}`">
          <div class="px-6 py-4 rounded-lg">
            <div class="pl-0">
              <img
                src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-145774,msid-86702803/coggndlf.jpg"
                class="h-40 w-80 md:h-48 md:w-96 rounded-lg icons"
              />
            </div>
            <div class="py-2 grid grid-cols-2 gap-48">
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <p
                  class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  4.8
                  <!-- <input :value="setIds(item.school_id)" /> -->
                </p>
              </div>
              <div
                class="inline-block md:inline-block md:pl-8 text-sm text-accent"
              >
                {{ item.school_board }}
              </div>
            </div>
            <div class="text-black grid">
              <strong>{{ item.school_name }}</strong>
            </div>
            <div class="flex flex-cols-2">
              <div class="py-1">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/location-3079544-2561454.png"
                  class="h-4 w-4"
                />
              </div>
              <div class="text-sm text-slate-500">
                <p>{{ item.school_city }}</p>
              </div>
            </div>
            <div class="flex flex-cols-2 gap-48 pl-1">
              <div>
                <p class="font-semibold text-sm">Annual Fees:</p>
              </div>
              <div class="md:float-right">
                <p
                  class="font-semibold text-sm"
                  v-if="
                    item.avg_fees_day == null &&
                    item.avg_fees_residential !== null
                  "
                  v-html="(item.avg_fees_residential * 12).toFixed(0)"
                ></p>
                <p
                  class="font-semibold text-sm"
                  v-if="
                    item.avg_fees_day !== null &&
                    item.avg_fees_residential == null
                  "
                  v-html="(item.avg_fees_day * 12).toFixed(0)"
                ></p>
                <p
                  class="font-semibold text-sm"
                  v-if="
                    (item.avg_fees_day == null &&
                      item.avg_fees_residential == null) ||
                    (item.avg_fees_day == '' && item.avg_fees_residential == '')
                  "
                >
                  Updated Soon
                </p>
                <p
                  class="font-semibold text-sm"
                  v-if="
                    item.avg_fees_day !== null &&
                    item.avg_fees_residential !== null
                  "
                  v-html="(item.avg_fees_day * 12).toFixed(0)"
                ></p>
              </div>
            </div>
          </div>
        </NuxtLink>
        <div
          class="py-2 grid grid-cols-2 place-items-start md:place-items-center gap-6 md:gap-20"
        >
          <div class="">
            <label
              for="my-modal-1"
              class="py-2 inline-block btn btn-accent w-32 md:w-32 max-w-xs text-base text-secondary cursor-pointer"
            >
              Apply Now
            </label>
          </div>
          <div>
            <label
              for="my-modal-1"
              class="py-2 inline-block btn btn-white w-36 md:w-36 max-w-xs text-base text-primary hover:text-white cursor-pointer"
            >
              Send Enquiry
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <EnquiryModal />
</template>
<script setup lang="ts">
import { json } from "stream/consumers";

const jsonData = ref();
const response = await useFetch("/api/fetchAll", {});
jsonData.value = response.data.value;
const showDiv = ref(false);
const check = ref({
  school: "",
  city: "",
});
const board = ref({
  cbse: [],
  icse: [],
  ib: [],
  igcse: [],
  state: [],
  other: [],
});
const type = ref({
  male: [],
  female: [],
  both: [],
});
const hostel = ref({
  yes: [],
  no: [],
  both: [],
});

function setState(item) {
  check.value.school = item.school_name;
  showDiv.value = false;
}
function clearInput() {
  check.value.school = "";
}

function fetchEntries() {
  return jsonData.value.allUsers.filter(
    (item: any) =>
      item.school_name
        .toLowerCase()
        .includes(check.value.school.toLowerCase()) &&
      item.school_gender.includes(type.value.male) &&
      item.school_gender.includes(type.value.female) &&
      item.school_gender.includes(type.value.both) &&
      item.school_city.toLowerCase().includes(check.value.city.toLowerCase()) &&
      item.school_hostel.includes(hostel.value.yes) &&
      item.school_hostel.includes(hostel.value.no) &&
      item.school_hostel.includes(hostel.value.both) &&
      item.school_board.includes(board.value.cbse) &&
      item.school_board.includes(board.value.icse) &&
      item.school_board.includes(board.value.ib) &&
      item.school_board.includes(board.value.igcse) &&
      item.school_board.includes(board.value.state) &&
      item.school_board.includes(board.value.other)
  );
}
const allRatings = ref();
// async function setIds(id: string) {
//   const fetchedRatings = await useFetch("/api/fetchAllRatings", {
//     method: "POST",
//     body: id,
//   });

//   allRatings.value = fetchedRatings.data.value?._avg.rating?.toFixed(1);
//   console.log(allRatings.value);
// }
// for (let i = 0; i < jsonData.value.allUsers.length; i++) {
//   const allRate = jsonData.value;
//   // console.log("id:", allRate.allUsers[i]?.school_id);
//   const allIds = allRate.allUsers[i]?.school_id;
//   console.log(allIds);
//   const fetchedRatings = await useFetch("/api/fetchAllRatings", {
//     method: "POST",
//     body: allIds,
//   });

//   allRatings.value = fetchedRatings.data.value?._avg.rating?.toFixed(1);
//   console.log(allRatings.value);
// }
// const fetchedRatings = await useFetch("/api/fetchAllRatings", {
//   method: "POST",
// });

// allRatings.value = fetchedRatings.data.value?._avg.rating?.toFixed(1);
// console.log(allRatings.value);
</script>
