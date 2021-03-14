<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.mobile"
      v-model="drawer"
      app
      class="pt-10"
      :mini-variant.sync="mini"
      mini-variant-width="100"
      permanent
      expand-on-hover
    >
      <v-avatar :size="64" class="d-block text-center mx-auto mb-4"><img src="~/assets/avatar.png" /></v-avatar>

      <p v-if="mini == false" class="subtitle-2 text-center font-weight-regular text--secondary">if you prefer</p>

      <v-list class="mt-12" nav rounded>
        <v-list-item active-class="active-tab" to="/" link>
          <v-list-item-avatar>
            <v-icon small>fas fa-user</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="text-button font-weight-bold">ABOUT ME</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="active-tab" link to="/what-i-do">
          <v-list-item-avatar>
            <v-icon small>fas fa-code-branch</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="text-button font-weight-bold">WHAT I DO</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="active-tab" link to="/projects">
          <v-list-item-avatar>
            <v-icon small>fas fa-terminal</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="text-button font-weight-bold">PROJECTS</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="active-tab" link to="/its-all-art">
          <v-list-item-avatar>
            <v-icon small>fas fa-atom</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="text-button font-weight-bold">IT'S ALL ART</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="active-tab" link to="/get-in-touch">
          <v-list-item-avatar>
            <v-icon small>fas fa-hands-helping</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="text-button font-weight-bold">GET IN TOUCH</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-bottom-navigation
      v-else
      v-model="value"
      app
      background-color="secondary"
      color="primary"
      class="py-4 hidden-md-and-up"
      grow
      mandatory
      shift
      height="4em"
    >
      <v-btn :ripple="false" to="/get-in-touch">
        <span class="pt-2">Contact</span>
        <v-icon class="pb-2">fas fa-hands-helping</v-icon>
      </v-btn>

      <v-btn :ripple="false" to="/">
        <span class="pt-2">About</span>
        <v-icon class="pb-2">fas fa-user</v-icon>
      </v-btn>

      <v-btn :ripple="false" to="/what-i-do">
        <span class="pt-2">Work</span>
        <v-icon class="pb-2">fas fa-code-branch</v-icon>
      </v-btn>

      <v-btn :ripple="false" to="/projects">
        <span class="pt-2">Projects</span>
        <v-icon class="pb-2">fas fa-terminal</v-icon>
      </v-btn>

      <v-btn :ripple="false" to="/its-all-art">
        <span class="pt-2">Art</span>
        <v-icon class="pb-2">fas fa-atom</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-main>
      <!--  -->
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      phone: '+358-40-705-65-33',
      email: 'info@finbrid.fi',
      collapseOnScroll: true,
      dialog: false,
      item: 1,
      items: [
        {
          text: 'Home',
          icon: 'fa fa-home',
          link: '/',
        },
        {
          text: 'About Us',
          icon: 'fa fa-user',
          link: '/about',
        },
        {
          text: 'What We Do',
          icon: 'fa fa-globe-europe',
          link: '/what_we_do',
        },
        {
          text: 'Contact Us',
          icon: 'fa fa-envelope',
          link: '/contact',
        },
      ],
      title: 'Finbrid',
      drawer: true,
      mini: true,
      value: 1,
    }
  },
  computed: {
    headerLogo() {
      return require('@/assets/avatar.png')
    },
  },
}
</script>

<style>
html {
  overflow-y: auto;
}
</style>
