<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <div class="branding">
        <router-link class="link" to="/"><img src='@/assets/white_logo_transparent_background.png' alt=""></router-link>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" to="/Delivery">Delivery</router-link></li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': moblieNav }"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="moblieNav" class="dropdown-nav">
          <li><router-link class="link" to="/Delivery">Delivery</router-link></li>
      </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  mounted () {
    window.addEventListener('scroll'.this.updateScroll)
  },

  methods: {
    updateScroll () {
      const scrollPosition = window.scrollY
      if (scrollPosition > 80) {
        this.scrolledNav = true
        return
      }
      this.scrolledNav = false
    }
  }
}
</script>

<style lang='scss' scoped>
header {
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;

    nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    @media(min-width: 1140px) {
        max-width: 1140px;
    }

    ul,
    link {
        font-weight: 500;
        list-style: none;
        text-decoration: none;
    }

    li {
        text-transform: uppercase;
        padding: 16px;
        margin-left: 16px;
    }

    .link {
        display: inline-block;
        margin: 20px 10px 0 0;
        padding: 6px 12px;
        background: rgba(238, 238, 238, 0.205);
        border-radius: 20px;
        letter-spacing: 1px;
        font-weight: bold;
        font-size: 14px;
        transition: .5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        text-decoration: none;
        color: #fff;
    }

    .branding {
        display: flex;
        align-items: center;
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    img {
        width: 200px;
        transition: .5s ease all;
    }

    .icon {
      display: flex;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: .8s ease all;
      }
    }
    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #fff;
      top: 0;
      left: 0;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

      li {
        margin-left: 0;
      }
    }
  }
}

.scrolled-nav {
  background-color: rgba(81, 83, 83, 0.692);
  box-shadow: rgba(78, 87, 90, 0.979);

  nav {
    padding: 8px 0;

    .branding {
      img {
        width: 40px;
        box-shadow: rgba(78, 87, 90, 0.979);
      }
    }
  }
}
</style>
