<template>
  <div class="layout">
    <Navbar />
    <main class="layout__content">
      <slot />
    </main>
  </div>
</template>

<script>
  import { Navbar } from '@/components'

  export default {
    name: 'LayoutDefault',
    components: {
      Navbar
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    padding: 4rem 3.5rem 0 3.5rem;

    &__content {
      padding: 4.5rem 0 0 0;
    }
  }
</style>
