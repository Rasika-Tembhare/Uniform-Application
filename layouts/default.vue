<template>
  <div>
    <div class="grid md:gap-96 grid-cols-1 md:justify-between">
      <div class="text-center md:pl-32 py-4">
        <p>
          <a
            href="mailto: mail@uniformapp.in"
            class="inline-block hover:bg-blue"
            ><img
              src="https://cdn-icons-png.flaticon.com/512/2150/2150422.png"
              class="h-4 w-4 inline-block gap-2"
            />
            mail@uniformapp.in</a
          >
        </p>
      </div>
      <div class="text-center md:pr-16 py-2">
        <a
          href="https://www.facebook.com/sharer/sharer.php?&amp;src=sdkpreparse"
          type="button"
          class="w-9 h-9 m-1"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
            class="h-4 w-4 inline-block gap-2"
          />
        </a>
        <a href="#!" type="button" class="w-9 h-9 m-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            class="h-4 w-4 inline-block gap-2"
          />
        </a>
        <a href="#!" type="button" class="w-9 h-9 m-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
            class="h-4 w-4 inline-block gap-2"
          />
        </a>
        <a href="#!" type="button" class="w-9 h-9 m-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
            class="h-4 w-4 inline-block gap-2"
          />
        </a>
      </div>
    </div>
    <div class="grid-rows-2">
      <div class="bg-white">
        <nav
          class="container px-4 py-2 mx-auto md:flex md:justify-between md:items-center"
        >
          <div class="flex items-center justify-between">
            <NuxtLink
              to="/"
              class="text-xl font-bold text-black md:text-2xl hover:text-red-600"
            >
            </NuxtLink>
            <div class="md:pl-20">
              <img
                src="https://uniformapp-images.s3.ap-south-1.amazonaws.com/logo_black.png"
                class="h-10 w-44 md:h-9 md:w-48"
              />
            </div>
            <div @click="toggleNav" class="flex md:hidden">
              <button
                type="button"
                class="text-black hover:text-black focus:outline-none focus:text-black"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-6 md:mt-0 md:pr-16"
          >
            <li class="text-black font-heading">
              <div class="dropdown">
                <button
                  tabindex="0"
                  class="focus:text-red-600 hover:text-accent"
                >
                  <NuxtLink to="/">Common Admissions</NuxtLink>
                </button>
              </div>
            </li>
            <li class="text-black font-heading">
              <div class="dropdown">
                <button
                  tabindex="0"
                  class="focus:text-red-600 hover:text-accent"
                >
                  <NuxtLink to="/">School Portal</NuxtLink>
                </button>
              </div>
            </li>
            <li class="text-black font-heading">
              <div class="dropdown">
                <button
                  tabindex="0"
                  class="focus:text-red-600 hover:text-accent"
                >
                  <NuxtLink to="/Search">Find School</NuxtLink>
                </button>
              </div>
            </li>
            <li class="text-black font-heading">
              <div class="dropdown">
                <button
                  tabindex="0"
                  class="focus:text-red-600 hover:text-accent"
                >
                  <NuxtLink to="/">Blog</NuxtLink>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- output content  -->
    <slot />

    <!-- footer starts here  -->
    <footer class="bg-white shadow-inner text-black">
      <div class="grid grid-cols-3 md:gap-48 gap-16">
        <div class="md:pl-32 md:py-4 py-0 text-black">
          <form action="">
            <div>
              <div>
                <p
                  class="uppercase font-bold mb-2.5 text-black md:text-left text-center"
                >
                  Subscribe to our Newsletter
                </p>
              </div>
              <div class="py-4 md:text-left text-center">
                <p>Get updated about admission forms, deadlines</p>
                <p>and articles to help you through the process.</p>
              </div>
              <div class="grid grid-cols-3 gap-2">
                <div class="py-0 grid place-items-center">
                  <input
                    type="text"
                    class="form-control block md:w-64 w-72 px-3 py-3 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>
                <div class="text-center">
                  <button
                    type="submit"
                    class="btn btn-accent rounded-lg py-0 px-5 h-10"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div class="md:py-32 grid place-items-center py-8">
            <img
              src="https://uniformapp-images.s3.ap-south-1.amazonaws.com/logo_black.png"
              class="h-10 w-44 md:h-9 md:w-48"
            />
          </div>
        </div>
        <div class="md:py-4 text-black">
          <h5
            class="uppercase font-bold mb-2.5 text-black md:text-left text-center"
          >
            Important Links
          </h5>
          <ul class="text-black md:text-left text-center py-4">
            <li class="py-1">
              <a href="/">Schools in India</a>
            </li>
            <li class="py-1">
              <a href="">Other Schools in India</a>
            </li>
            <li class="py-1">
              <a href="/">Colleges in India</a>
            </li>
            <li class="py-1">
              <a href="/">Advertise With Us</a>
            </li>
            <li class="py-1">
              <a href="/">Common Admissions</a>
            </li>
            <li class="py-1">
              <a href="/">Edunify India</a>
            </li>
          </ul>
        </div>
        <div class="py-4">
          <h5
            class="uppercase font-bold mb-2.5 text-black md:text-left text-center"
          >
            Support
          </h5>
          <ul class="md:text-left text-center text-black py-4">
            <li class="py-1"><a href="">Privacy Policy</a></li>
            <li class="py-1"><a href="">Terms and Conditions</a></li>
            <li class="py-1"><a href="">Refund Policy</a></li>
            <li class="py-1"><a href="">Contact Us</a></li>
            <li class="py-1"><a href="">About Us</a></li>
            <li class="py-1">
              <NuxtLink to="/cgpaConvertor">CGPA Converter</NuxtLink>
            </li>
            <li class="text-black py-14">
              Copyright : Uniform Ventures Pvt. Ltd.
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const showDiv = ref(true);
const showMenu = ref(false);
// function click() {
//   showDiv.value = true;
// }
function toggleNav() {
  showMenu.value = !showMenu.value;
}
</script>

<style scoped>
.grid {
  /* Mobile by default as Roy pointed out */
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  /* For desktops */
  .grid {
    flex-direction: row;
  }
}
</style>
