<script setup lang="ts"></script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/weight">Weight</router-link>
  </nav>
  <main>
    <RouterView></RouterView>
  </main>
</template>
