<template>
  <div>
    <header>
      <div class="navbar bg-base-100 shadow-lg">
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        <div class="py-5"><NuxtLink to="/">Home</NuxtLink></div>
      </div>
    </header>
  </div>
  <div class="p-5 m-5 md:m-5 md:p-5">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>
