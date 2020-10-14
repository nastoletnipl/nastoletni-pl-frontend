<template>
  <Navbar :links="links" />
  <transition name="swipe">
    <router-view/>
  </transition>
</template>

<script>
import Navbar from "@/components/Navbar";
const links = [
  { text: "Strona główna", link: "/", active: true },
  { text: "Strefa tech", link: "/tech", active: true },
  { text: "Nasze programy", link: "/programs", active: true },
  { text: "Od użytkowników", link: "/users-blog", active: true },
];

export default {
  components: {
    Navbar
  },
  data() {
    return {
      links: links
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@400;700&display=swap');

  body {
    font-family: 'Commissioner', sans-serif;
  }
</style>