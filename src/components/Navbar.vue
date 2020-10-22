<template>
  <nav class="nav">
    <div class="nav__logo">
      <a href="/">
        <img src="@/assets/logo.png" alt="logo">
      </a>
    </div>
    <div class="nav__links">
      <div class="nav__link">
        <router-link :to="{ name: 'Home' }">
          Strona główna
        </router-link>
      </div>
      <div class="nav__link">
        <router-link :to="{ name: 'TechZone' }">
          Strefa tech
        </router-link>
      </div>
      <div class="nav__link">
        <router-link :to="{ name: 'Programs' }">
          Nasze programy
        </router-link>
      </div>
      <div class="nav__link">
        <router-link :to="{ name: 'UsersBlog' }">
          Od użytkowników
        </router-link>
      </div>
      <div class="nav__link nav__link-login">
        <a href="/">
          <font-awesome-icon class="nav__icon" :icon="['fas', 'user']" />
          Zaloguj się
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    justify-content: space-between;

    &__links {
      font-size: 1.15rem;
      display: flex;
      align-items: center;
    }

    &__link {
      display: inline-block;
      margin: 0 0 0 2rem;

      a {
        text-decoration: none;
        color: black;
      }

      &-login {
        font-weight: bold;
        font-size: 1.4rem;
        margin: 0 0 0 3rem;
      }
    }

    &__icon {
      margin: 0 10px 0 0;
    }
  }

  .router-link-active {
    position: relative;
    font-weight: bold;

    &:after {
      content: '';
      position: absolute;
      border-radius: 50px;
      bottom: -1px;
      left: -9px;
      right: 60px;
      height: 10px;
      width: 45px;
      background: rgba(197, 0, 255, 0.3);
      z-index: -1;
    }
  }
</style>
