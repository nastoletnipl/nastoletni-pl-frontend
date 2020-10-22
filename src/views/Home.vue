<template>
  <layout-default>
    <header class="header">
      <div class="header__content header__content-left">
        <div class="blogpost">
          <img
            class="blogpost__img"
            src="https://stackify.com/wp-content/uploads/2019/02/C-Garbage-Collection-Tutorial-1280x720.jpg"
            alt="last news image"
          >
          <h1 class="blogpost__title">Co nowego w .NET 5? Między innymi C# 9.0, zmiany w ASP.NET...</h1>
          <p class="blogpost__description">Już niedługo na naszych systemach może zagościć nowa wersja biblioteki .NET - oznaczona numberem 5.0</p>
          <span class="blogpost__author">By Piotrek P.</span>
          <span class="blogpost__date">10 pażdziernika 2020</span>
        </div>
      </div>
      <div class="header__content header__content-right">
        <div class="blogpost-container">
          <div
            class="blogpost"
            v-for="post in posts"
            :key="post.id"
          >
            <div>
              <h2 class="blogpost__title">{{ post.title }}</h2>
              <span class="blogpost__author">By {{ post.author }}</span>
              <span class="blogpost__date">11 pażdziernika 2020</span>
            </div>
            <img  src="https://stackify.com/wp-content/uploads/2019/02/C-Garbage-Collection-Tutorial-1280x720.jpg">
          </div>
        </div>
      </div>
    </header>
  </layout-default>
</template>

<script>
  import { LayoutDefault } from '@/layouts'

  export default {
    name: 'Home',
    components: {
      LayoutDefault
    },
    data() {
      return {
        posts: [
          { id: 1,
            title: "Nowa wersja frameworke'a Vue - 3.0. Jakie przynosi zmiany?",
            author: "Wiktor S."
          },
          { id: 2,
            title: "Nowa wersja frameworke'a Vue - 3.0. Jakie przynosi zmiany?",
            author: "Wiktor S."
          },
          { id: 3,
            title: "Nowa wersja frameworke'a Vue - 3.0. Jakie przynosi zmiany?",
            author: "Wiktor S."
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5rem;
    margin: 0 0 3rem 0;

    .blogpost {
      &__description, &__date {
        color: #383838;
      }

    }

    &__content {
      width: 100%;
      height: auto;

      &-left {
        .blogpost {
          max-width: 550px;

          &__img {
            max-width: 550px;
            border-radius: 20px;
          }

          &__title {
            color: black;
            font-size: 1.8rem;
            margin: 1.5rem 0 0 0;
            line-height: 1.5;
            text-decoration: underline;
            text-decoration-color: rgba(197, 0, 255, 0.7);
          }

          &__description {
            font-size: 1.2rem;
            font-weight: 400;
            margin: 1.2rem 0 0 0;
            line-height: 1.5;
          }

          &__author {
            font-weight: bold;
            display: block;
            margin: 1.2rem 0 0 0;
            font-size: 1.2rem;
          }

          &__date {
            margin: 0.25rem 0 0 0;
            display: block;
            font-size: 1.10rem;
          }
        }
      }

      &-right {

        .blogpost-container {
          display: grid;
          max-width: 600px;
          float: right;
          grid-row-gap: 30px;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto auto;
          height: 100%;
        }

        .blogpost {
          text-align: right;
          display: flex;
          align-items: center;

          &__title {
            color: black;
            font-size: 1.55rem;
            line-height: 1.5;
          }

          &__description {
            color: black;
            font-size: 1.2rem;
            font-weight: 400;
            margin: 1.2rem 0 0 0;
            line-height: 1.5;
          }

          &__author {
            font-weight: bold;
            display: block;
            margin: 1.2rem 0 0 0;
            font-size: 1.10rem;
          }

          &__date {
            margin: 0.25rem 0 0 0;
            display: block;
            font-size: 1.05rem;
          }

          img {
            width: 130px;
            height: 130px;
            border-radius: 20px;
            margin: 0 0 0 1.5rem;
          }
        }
      }
    }
  }
</style>
