<template>
  <section>
    <div
      class="md:container md:mx-auto items-center justify-center bg-base-100 py-5"
    >
      <div class="flex flex-col md:flex-row w-full max-w-full">
        <div
          tabindex="0"
          class="collapse collapse-plus border border-base-300 rounded-box w-full bg-gray-100"
        >
          <input type="checkbox" />
          <div class="collapse-title text-2xl font-medium text-primary">
            Fee Details
          </div>
          <div class="collapse-content">
            <div class="flex flex-col gap-8 py-2 m-auto md:flex-row">
              <!-- Card-1 -->
              <div class="grid grid-rows-2 grid-flow-col gap-4">
                <div class="stats shadow overflow-hidden md:w-64 w-48">
                  <div class="stat">
                    <div class="stat-title text-xl text-red-600">
                      Total Cost
                    </div>
                    <div class="stat-value text-lg">2,51,000</div>
                    <div class="stat-desc text-sm text-blue-400">
                      What is total cost?
                    </div>
                  </div>
                </div>
                <div class="stats shadow overflow-hidden md:w-64 w-48">
                  <div class="stat">
                    <div class="stat-title text-xl text-red-600">
                      Total Cost
                    </div>
                    <div class="stat-value text-lg">2,51,000</div>
                    <div class="stat-desc text-sm text-blue-400">
                      What is total cost?
                    </div>
                  </div>
                </div>
              </div>
              <!-- Table -->
              <table class="w-full table">
                <tr class="bg-gray-100">
                  <th class="p-2 text-center">Type</th>
                  <th class="p-2 text-center">Amount</th>
                  <th class="p-2 text-center pr-4">Frequency</th>
                </tr>
                <tr class="">
                  <td class="p-2 text-center">Registration Fees</td>
                  <td class="p-2 text-center">$1000</td>
                  <td class="p-2 text-center">One Time</td>
                </tr>
                <tr>
                  <td class="p-2 text-center">Registration Fees</td>
                  <td class="p-2 text-center">$1000</td>
                  <td class="p-2 text-center">One Time</td>
                </tr>
                <tr class="">
                  <td class="p-2 text-center">Registration Fees</td>
                  <td class="p-2 text-center">$1000</td>
                  <td class="p-2 text-center">One Time</td>
                </tr>
                <tr>
                  <td class="p-2 text-center">Registration Fees</td>
                  <td class="p-2 text-center">$1000</td>
                  <td class="p-2 text-center">One Time</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.grid {
  /* Mobile by default as Roy pointed out */
  display: flex;
  flex-direction: row;
}
@media (min-width: 768px) {
  /* For desktops */
  .grid {
    flex-direction: column;
  }
}
</style>
