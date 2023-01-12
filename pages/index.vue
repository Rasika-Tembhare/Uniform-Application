<template>
  <!-- This is an example component -->
  <div class="grid place-items-center py-16" @click="Hide">
    <div class="text-4xl text-black capitalize font-bold m-2 text-center">
      FIND THE BEST SCHOOL FOR YOUR CHILD
    </div>
  </div>
  <div class="py-8 relative md:w-1/2 h-16 mx-auto text-gray-600">
    <input
      v-model="check.school"
      class="w-full h-16 border-2 border-gray-300 bg-white px-5 pr-16 rounded-full text-sm focus:outline-none"
      type="search"
      name="search"
      placeholder="Search"
    />
    <button
      type="submit"
      class="py-6 absolute right-0 top-1 mt-5 mr-4"
      @click="showResult"
    >
      <svg
        class="text-gray-600 h-8 w-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 56.966 56.966"
        style="enable-background: new 0 0 56.966 56.966"
        xml:space="preserve"
        width="512px"
        height="512px"
      >
        <path
          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
        />
      </svg>
    </button>

    <!-- DropDown1 -->
    <div class="py-4 pr-2" @click="Hide">
      <div class="flex flex-col md:pl-4 py-2 md:flex-row md:text-center">
        <div class="dropdown text-center md:pl-0 pl-2">
          <label tabindex="0" class="btn btn-accent m-1 md:w-60 w-80 text-white"
            >Choose City
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
          </label>

          <ul
            tabindex="0"
            class="dropdown-content menu p-2 bg-white rounded-box md:w-52 w-full shadow-xl"
          >
            <li v-for="items in filtered" v-bind:key="items.school_city">
              <a
                ><input
                  type="checkbox"
                  :value="items.school_city"
                  v-model="check.city"
                />{{ items.school_city }}</a
              >
            </li>
          </ul>
        </div>
        <div class="dropdown text-center md:pl-0 pl-2">
          <label tabindex="0" class="btn btn-accent m-1 md:w-60 w-80 text-white"
            >Choose Board
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
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 bg-white rounded-box md:w-64 w-full shadow-xl"
          >
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
        <div class="dropdown text-center md:pl-0 pl-2">
          <label tabindex="0" class="btn btn-accent m-1 md:w-60 w-80 text-white"
            >Choose Type
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
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-gray-100 rounded-box md:w-52 w-full"
          >
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
        <!-- <div class="dropdown">
        <label tabindex="0" class="btn m-1 btn m-1 md:w-48 w-full text-white bg-red-500">Choose Hostel
          <svg class="w-6 h-6 inline-block float-right" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-gray-100 rounded-box md:w-52 w-full">
          <li><a><input type="checkbox"  />Yes</a></li>
          <li><a><input type="checkbox"  />No</a></li>
          <li><a><input type="checkbox"  />Both</a></li>
        </ul>
      </div> -->
      </div>
    </div>
  </div>
  <!-- show Result -->
  <div
    @click="Hide"
    class="py-64 md:py-32 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4"
    v-if="hideData"
  >
    <div
      class="rounded overflow-hidden shadow-lg"
      v-for="item in fetchEntries()"
      v-bind:key="item.school_id"
    >
      <NuxtLink :to="`http://localhost:3000/${item.perma_link}`">
        <div class="px-6 py-4 rounded-lg">
          <div class="pl-0">
            <img
              src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-145774,msid-86702803/coggndlf.jpg"
              class="h-64 w-full rounded-lg icons"
            />
          </div>
          <div class="text-black grid py-4">
            <strong>{{ item.school_name }}</strong>
            <ul>
              <li class="rounded-t relative -mb-px block border border-grey">
                <div>Type:{{ item.school_gender }}</div>
              </li>
              <li class="relative -mb-px block border border-grey">
                <div>Board:{{ item.school_board }}</div>
              </li>
              <li class="relative -mb-px block border border-grey">
                <div>City: {{ item.school_city }}</div>
              </li>
              <li class="relative -mb-px block border border-grey">
                <div>Hostel: {{ item.school_hostel }}</div>
              </li>
            </ul>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
  <!-- End Result -->

  <section class="section wb py-72 md:py-56" @click="Hide">
    <div class="flex flex-col">
      <div class="row text-center">
        <h1 class="text-4xl text-black">Why Uniform Application?</h1>
        <div class="flex flex-col gap-4 py-8 m-auto md:flex-row">
          <div class="w-full p-6 bg-white rounded-lg">
            <div class="grid place-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2821/2821739.png"
                class="icons h-16 w-28"
              />
            </div>
            <h3 class="text-lg py-4">Common Application Form</h3>
            <p class="text-sm text-slate-500 italic">
              Apply to multiple schools from the comfort of your home using our
              common application form.
            </p>
          </div>
          <div class="w-full p-6 bg-white rounded-lg">
            <div class="grid place-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
                class="icons h-16 w-28"
              />
            </div>
            <h3 class="text-lg py-4">One-Stop Dashboard</h3>
            <p class="text-sm text-slate-500 italic">
              Keep track of all your applications from a single place using our
              Dashboard.
            </p>
          </div>
          <div class="w-full p-6 bg-white rounded-lg">
            <div class="grid place-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/576/576579.png"
                class="icons h-16 w-28"
              />
            </div>
            <h3 class="text-lg py-4">Intuitive Search</h3>
            <p class="text-sm text-slate-500 italic">
              Find the best school for your child based on your priorities and
              preferences.
            </p>
          </div>
        </div>
      </div>

      <div class="row text-center" @click="Hide">
        <div class="flex flex-col gap-4 py-2 m-auto md:flex-row">
          <div class="w-full p-6 bg-white rounded-lg">
            <div class="grid place-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8062/8062129.png"
                class="h-16 w-28 icons"
              />
            </div>
            <h3 class="text-lg py-4">Verified Information</h3>
            <p class="text-sm text-slate-500 italic">
              Get access to verified information about each school's contact
              details and admission procedure.
            </p>
          </div>
          <div class="w-full p-6 bg-white rounded-lg">
            <div class="grid place-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1968/1968666.png"
                class="h-16 w-28 icons"
              />
            </div>
            <h3 class="text-lg py-4">Digital Communication</h3>
            <p class="text-sm text-slate-500 italic">
              Communicate with schools digitally and get notified at each step
              of the admission process.
            </p>
          </div>
          <div class="w-full p-6 bg-white rounded-lg">
            <div class="grid place-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3154/3154275.png"
                class="h-16 w-28 icons"
              />
            </div>
            <h3 class="text-lg py-4">No Paper Wastage</h3>
            <p class="text-sm text-slate-500 italic">
              Fill the online application form and reduce paper wastage in the
              whole process.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center py-16 md:py-16" @click="Hide">
      <h2 class="text-black text-4xl">Best Schools in your City</h2>
      <p class="text-sm text-slate-500 italic">
        Choose from a wide variety of schools based on your priorities
      </p>
    </div>
    <div
      class="py-0 md:py-0 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2"
    >
      <div
        class="rounded overflow-hidden shadow-lg"
        v-for="items in filtered"
        v-bind:key="items.school_city"
      >
        <div class="px-6 py-0 rounded-lg">
          <div class="pl-0">
            <img
              src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-145774,msid-86702803/coggndlf.jpg"
              class="h-64 w-full rounded-lg icons"
            />
          </div>

          <p
            class="py-4 text-black grid place-items-center"
            v-if="
              items.school_city == 'Lucknow' || items.school_city == 'Noida'
            "
          >
            <strong>Best Schools in {{ items.school_city }}</strong>
          </p>
          <p v-else class="py-4 text-black grid place-items-center">
            <strong>Best Schools in {{ items.school_city }}</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// useHead({
//   title: "Uniform Application",
//   meta: [{ name: "description", content: "" }],
// });
const jsonData = ref();
const response = await useFetch("/api/fetchAll", {});
jsonData.value = response.data.value;
const hideData = ref(false);
const check = ref({
  school: "",
  city: [],
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
const Board = computed(() => {
  return board.value;
});
const Type = computed(() => {
  return type.value;
});

function fetchEntries() {
  return jsonData.value.allUsers.filter(
    (item: any) =>
      item.school_name
        .toLowerCase()
        .includes(check.value.school.toLowerCase()) &&
      item.school_gender.includes(type.value.male) &&
      item.school_gender.includes(type.value.female) &&
      item.school_gender.includes(type.value.both) &&
      item.school_city.includes(check.value.city) &&
      item.school_board.includes(board.value.cbse) &&
      item.school_board.includes(board.value.icse) &&
      item.school_board.includes(board.value.ib) &&
      item.school_board.includes(board.value.igcse) &&
      item.school_board.includes(board.value.state) &&
      item.school_board.includes(board.value.other)
  );
}

function showResult() {
  hideData.value = true;
}
// Filter Duplicate fo City
const ids = jsonData.value.allUsers.map((o) => o.school_city);
const filtered = jsonData.value.allUsers.filter(
  ({ school_city }, index) => !ids.includes(school_city, index + 1)
);
// function SearchCity(){
//   return filtered.value.filter((items: any) =>
//     items.school_city.toLowerCase().includes(citySearch.value.toLowerCase())
//     );
// }

function Hide() {
  hideData.value = false;
}
</script>

<style scoped></style>
