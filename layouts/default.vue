<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-10"
      :mini-variant.sync="mini"
      mini-variant-width="100"
      permanent
      expand-on-hover
    >
      <v-avatar :size="64" class="d-block text-center mx-auto mb-4"
        ><img src="~/assets/avatar.png"
      /></v-avatar>

      <p
        v-if="mini == false"
        class="subtitle-2 text-center font-weight-regular text--secondary"
      >
        if you prefer
      </p>

      <v-list class="mt-12" nav rounded>
        <v-list-item active-class link href="/">
          <v-list-item-avatar>
            <v-icon small>fas fa-user</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="text-button font-weight-bold"
            >ABOUT ME</v-list-item-title
          >
        </v-list-item>
        <v-list-item link href="/what-i-do">
          <v-list-item-avatar>
            <v-icon small>fas fa-code-branch</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="text-button font-weight-bold"
            >WHAT I DO</v-list-item-title
          >
        </v-list-item>
        <v-list-item link href="/projects">
          <v-list-item-avatar>
            <v-icon small>fas fa-terminal</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="text-button font-weight-bold"
            >PROJECTS</v-list-item-title
          >
        </v-list-item>
        <v-list-item link href="/its-all-art">
          <v-list-item-avatar>
            <v-icon small>fas fa-atom</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="text-button font-weight-bold"
            >IT'S ALL ART</v-list-item-title
          >
        </v-list-item>
        <v-list-item link href="/get-in-touch">
          <v-list-item-avatar>
            <v-icon small>fas fa-hands-helping</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="text-button font-weight-bold"
            >GET IN TOUCH</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
      drawer: true,
      mini: true,
      right: null,
    }
  },
}
</script>

<style>
html {
  overflow-y: auto;
}
</style>
