<template>
  <div class="text-center py-8">
    <p class="text-blue-600/100 underline">
      Jump to CGPA to Percentage Converter
    </p>
  </div>
  <div class="text-4xl text-black capitalize font-bold m-2 text-center">
    <h1 class="head">CGPA Calculator- CGPA Converter</h1>
  </div>
  <div class="text-sm text-black text-center">
    <p>Calculate CGPA or Percentage as per your choice</p>
  </div>
  <div class="col-xs-15 col-md-6 py-4">
    <h2 class="text-2xl text-black text-center">According to Marks</h2>
  </div>
  <div class="grid place-items-center">
    <div class="flex flex-col py-0">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Subject 1</label
      >
      <input
        v-model="num1"
        type="number"
        placeholder="Marks of Subject 1"
        class="input-bordered w-64 md:w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        min="0"
        max="100"
        required
      />
    </div>
    <div class="flex flex-col py-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Subject 2</label
      >
      <input
        v-model="num2"
        type="number"
        placeholder="Marks of Subject 2"
        class="input-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 md:w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        min="0"
        max="100"
        required
      />
    </div>
    <div class="flex flex-col py-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Subject 3</label
      >
      <input
        v-model="num3"
        type="number"
        placeholder="Marks of Subject 3"
        class="input-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 md:w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        min="0"
        max="100"
        required
      />
    </div>
    <div class="flex flex-col py-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Subject 4</label
      >
      <input
        v-model="num4"
        type="number"
        placeholder="Marks of Subject 4"
        class="input-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 md:w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        min="0"
        max="100"
        required
      />
    </div>
    <div class="flex flex-col py-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Subject 5</label
      >
      <input
        v-model="num5"
        type="number"
        placeholder="Marks of Subject 5"
        class="input-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 md:w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        min="0"
        max="100"
        required
      />
    </div>
    <div class="flex flex-col py-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Subject(Opional) 6</label
      >
      <input
        v-model="num6"
        type="number"
        placeholder="Marks of Subject 6"
        class="w-64 md:w-64 input-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        min="0"
        max="100"
        required
      />
    </div>
    <div class="flex justify-center">
      <button
        class="btn btn-accent w-64 md:w-64 max-w-xs mt-5 mb-2 text-base text-secondary"
        @click="Calculate"
      >
        Calculate</button
      ><br /><br />
    </div>
    <div class="flex justify-center">
      <button
        v-if="ShowResult"
        class="btn btn-accent w-64 md:w-64 max-w-xs mt-5 mb-2 text-base text-secondary"
        @click="click"
      >
        Clear</button
      ><br /><br />
    </div>
  </div>

  <div class="grid place-items-center rounded-lg" v-if="ShowResult">
    <svg class="animate-bounce w-6 h-6 ...">
      <!-- ... -->
    </svg>
    <table class="w-64 bg-white">
      <!-- head -->
      <thead>
        <tr>
          <th class="text-center">Your CGPA as per Marks: {{ cgpa }}</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="py-0">
    <h2 class="text-2xl text-black text-center">According to Grades</h2>
  </div>
  <div class="grid place-items-center">
    <div class="flex flex-col py-4">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Subject 1
      </label>
      <select v-model="s1" class="select select-ghost w-64 bg-gray-100">
        <option value="" readonly>Select Grades</option>
        <option value="10">A1</option>
        <option value="9">A2</option>
        <option value="8">B1</option>
        <option value="7">B2</option>
        <option value="6">C1</option>
        <option value="5">C2</option>
        <option value="4">D</option>
        <option value="0">E1</option>
        <option value="0">E2</option>
      </select>
    </div>
    <div class="flex flex-col py-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Subject 2</label
      >
      <select v-model="s2" class="select select-ghost w-64 bg-gray-100">
        <option value="" readonly>Select Grades</option>
        <option value="10">A1</option>
        <option value="9">A2</option>
        <option value="8">B1</option>
        <option value="7">B2</option>
        <option value="6">C1</option>
        <option value="5">C2</option>
        <option value="4">D</option>
        <option value="0">E1</option>
        <option value="0">E2</option>
      </select>
    </div>
    <div class="flex flex-col py-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Subject 3</label
      >
      <select v-model="s3" class="select select-ghost w-64 bg-gray-100">
        <option value="" readonly>Select Grades</option>
        <option value="10">A1</option>
        <option value="9">A2</option>
        <option value="8">B1</option>
        <option value="7">B2</option>
        <option value="6">C1</option>
        <option value="5">C2</option>
        <option value="4">D</option>
        <option value="0">E1</option>
        <option value="0">E2</option>
      </select>
    </div>
    <div class="flex flex-col py-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Subject 4</label
      >
      <select v-model="s4" class="select select-ghost w-64 bg-gray-100">
        <option value="" readonly>Select Grades</option>
        <option value="10">A1</option>
        <option value="9">A2</option>
        <option value="8">B1</option>
        <option value="7">B2</option>
        <option value="6">C1</option>
        <option value="5">C2</option>
        <option value="4">D</option>
        <option value="0">E1</option>
        <option value="0">E2</option>
      </select>
    </div>
    <div class="flex flex-col py-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Subject 5</label
      >
      <select v-model="s5" class="select select-ghost w-64 bg-gray-100">
        <option value="" readonly>Select Grades</option>
        <option value="10">A1</option>
        <option value="9">A2</option>
        <option value="8">B1</option>
        <option value="7">B2</option>
        <option value="6">C1</option>
        <option value="5">C2</option>
        <option value="4">D</option>
        <option value="0">E1</option>
        <option value="0">E2</option>
      </select>
    </div>
    <div class="flex flex-col py-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Subject 6</label
      >
      <select v-model="s6" class="select select-ghost w-64 bg-gray-100">
        <option value="" readonly>Select Grades(Optional)</option>
        <option value="10">A1</option>
        <option value="9">A2</option>
        <option value="8">B1</option>
        <option value="7">B2</option>
        <option value="6">C1</option>
        <option value="5">C2</option>
        <option value="4">D</option>
        <option value="0">E1</option>
        <option value="0">E2</option>
      </select>
    </div>
  </div>
  <div class="flex justify-center">
    <button
      class="btn btn-accent w-64 md:w-64 max-w-xs mt-5 mb-2 text-base text-secondary"
      @click="Calculation"
    >
      Calculate
    </button>
  </div>
  <div class="flex justify-center">
    <button
      v-if="HideResult"
      class="btn btn-accent w-64 md:w-64 max-w-xs mt-5 mb-2 text-base text-secondary"
      @click="onclick"
    >
      Clear</button
    ><br /><br />
  </div>
  <div class="grid place-items-center" v-if="HideResult">
    <table class="w-64 bg-white">
      <!-- head -->
      <thead>
        <tr>
          <th class="text-center">Your CGPA as per Grade: {{ grade }}</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="grid place-items-center">
    <h2 class="text-2xl text-black text-center">Directly Calculate</h2>
    <div class="flex flex-col py-4">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >CGPA</label
      >
      <input
        :value="cgp"
        @change="calCgpa"
        type="number"
        placeholder="Enter CGPA (>0 AND <10)"
        class="w-64 input-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 md:w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        min="1"
        max="10"
        required
      />
    </div>
    <div class="flex flex-col py-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Percentage</label
      >
      <input
        :value="per"
        @change="calPer"
        type="number"
        placeholder="Enter Percentage (>0 AND <100)"
        class="w-64 md:w-64 input-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        min="1"
        max="100"
        required
      />
    </div>
  </div>
  <CgpaContent />
</template>

<script setup lang="ts">
const num1 = ref("");
const num2 = ref("");
const num3 = ref("");
const num4 = ref("");
const num5 = ref("");
const num6 = ref("");
const s1 = ref("");
const s2 = ref("");
const s3 = ref("");
const s4 = ref("");
const s5 = ref("");
const s6 = ref("");
const sumNum = ref("");
const sum = ref("");
const cgpa = ref("");
const grade = ref("");
const cgp = ref("");
const per = ref("");

const ShowResult = ref(false);
const HideResult = ref(false);

const calCgpa = (event) => {
  if (Number(cgp.value) <= 10 && Number(cgp.value) >= 0) {
    cgp.value = event.target.value;
    per.value = (Number(cgp.value) * 9.5).toFixed(1);
  } else {
    alert(" CGPA value must be between 0 and 10");
    cgp.value = "";
  }
};

const calPer = (event) => {
  if (Number(per.value) <= 95 && Number(per.value) >= 0) {
    per.value = event.target.value;
    cgp.value = (Number(per.value) / 9.5).toFixed(1);
  } else if (Number(per.value) > 95 && Number(per.value) <= 100) {
    cgp.value = 10;
  } else {
    alert(" Percentage value must be between 0 and 100");
    per.value = "";
  }
};

function Calculate() {
  if (
    num1.value !== "" &&
    num2.value !== "" &&
    num3.value !== "" &&
    num4.value !== "" &&
    num5.value !== ""
  ) {
    if (num6.value !== "") {
      sumNum.value =
        num1.value +
        num2.value +
        num3.value +
        num4.value +
        num5.value +
        num6.value;
      cgpa.value = (sumNum.value / 6).toFixed(1);
    } else {
      sumNum.value =
        num1.value + num2.value + num3.value + num4.value + num5.value;
      cgpa.value = (sumNum.value / 5).toFixed(1);
    }
    ShowResult.value = true;
  } else {
    alert("Please Enter Numbers");
  }
}
function Calculation() {
  if (
    s1.value !== "" &&
    s2.value !== "" &&
    s3.value !== "" &&
    s4.value !== "" &&
    s5.value !== ""
  ) {
    if (s6.value !== "") {
      sum.value =
        Number(s1.value) +
        Number(s2.value) +
        Number(s3.value) +
        Number(s4.value) +
        Number(s5.value) +
        Number(s6.value);
      grade.value = (sum.value / 6).toFixed(1);
    } else {
      sum.value =
        Number(s1.value) +
        Number(s2.value) +
        Number(s3.value) +
        Number(s4.value) +
        Number(s5.value);
      grade.value = (sum.value / 5).toFixed(1);
    }
    HideResult.value = true;
  } else {
    alert("Please Select Grades");
  }
}
function onclick() {
  HideResult.value = false;
  s1.value = "";
  s2.value = "";
  s3.value = "";
  s4.value = "";
  s5.value = "";
  s6.value = "";
}
function click() {
  ShowResult.value = false;
  num1.value = "";
  num2.value = "";
  num3.value = "";
  num4.value = "";
  num5.value = "";
  num6.value = "";
}
</script>

<style scoped></style>
