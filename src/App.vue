<template>
  <div id="app">
    <div class="mobile-navbar">
      <div
        @click="toggleMobileNavbar"
        class="menu-button"
        :class="{ color: isMenuOpen }"
      >
        <i class="fa fa-bars"></i>
      </div>
      <div class="mobile-menu" :class="{ open: isMenuOpen }">
        <a href="#" class="mobile-menu-item">
          <i class="fas fa-sign-in-alt"></i>
          התחבר
        </a>
        <a href="#" class="mobile-menu-item">
          <i class="fas fa-shopping-cart"></i>
          ההזמנות שלי
        </a>
        <a href="#" class="mobile-menu-item">
          <i class="fas fa-tag"></i>
          המחירון שלי
        </a>
        <a href="#" class="mobile-menu-item">
          <i class="fas fa-user"></i>
          עדכון פרטים
        </a>
        <a href="#" class="mobile-menu-item">
          <i class="fas fa-lock"></i>
          איפוס סיסמא
        </a>
        <a href="#" class="mobile-menu-item">
          <i class="fas fa-question-circle"></i>
          FAQ
        </a>
      </div>
    </div>
    <router-link to="/" class="application-title">
      <h1>Phonebook</h1>
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },

  methods: {
    toggleMobileNavbar() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="scss">
.application-title {
  text-align: center;
  color: #1f1f1f;
  text-decoration: none;
}

.mobile-navbar {
  display: none;
}

@media (max-width: 520px) {
  .mobile-navbar {
    display: block;
  }

  .menu-button {
    cursor: pointer;
    padding: 12px;
    font-size: 1.4rem;
  }

  .color {
    background-color: #1f1f1f;
    border-bottom: 2px solid #505050;
    color: #aeaeae;
  }

  .mobile-menu {
    background-color: #1f1f1f;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: -100%;
    transition: 0.5s left;
    z-index: 1;
    width: 100%;
  }

  .mobile-menu-item {
    color: #aeaeae;
    text-decoration: none;
    padding: 12px;

    .fas {
      color: #bbe3fc;
      padding-right: 7px;
    }
  }

  .mobile-menu-item:not(:last-child) {
    border-bottom: 1px solid #535353;
  }

  .mobile-menu.open {
    left: 0;
  }
}
</style>
