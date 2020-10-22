<template>
  <router-view />
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@400;700&display=swap');

  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Commissioner', sans-serif;
  }
</style>
