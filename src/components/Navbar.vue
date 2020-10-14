<template>
  <div class="navbar">
    <div class="navbar__logo">
      <img src="@/assets/logo.png" alt="Logo">
    </div>
    <div class="separator" />
    <div class="navbar__links">
      <div class="navbar__link" v-for="link in links" :key="link.text">
        <router-link class="navbar__link-content" :to="link.link" v-if="link.active">
          {{ link.text }}
        </router-link>
        <span v-else class="navbar__link not-active">
          {{ link.text }}
        </span>
      </div>
    </div>
    <div class="navbar__login">
      <font-awesome-icon class="navbar__login-icon" :icon="['fas', 'user']" />
     <span class="navbar__login-text">Zaloguj się</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    align-items: center;
    margin: 50px;
    display: flex;

    .navbar__logo img {
      width: 200px;
    }

    .separator {
      flex: 1;
    }

    .navbar__links {
      margin-right: 100px;
      display: flex;

      .navbar__link {
        margin-left: 50px;

        & a {
          text-decoration: none;
          color: black;
        }

        .router-link-active {
          position: relative;
          font-weight: bold;

          &:after {
            content: '';
            position: absolute;
            border-radius: 50px;
            bottom: -3px;
            left: -9px;
            right: 60px;
            height: 10px;
            width: 40px;
            background: rgba(197, 0, 255, 0.4);
            z-index: -1;
          }
        }
      }
    }

    .navbar__login {
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;

      .navbar__login-icon {
        margin-right: 20px;
      }
    }
  }
</style>