<template>
  <div>
    <v-row justify="center" align="center" class="my-10">
      <v-icon large>fas fa-hands-helping</v-icon>
      <h1 class="font-weight-black pl-4">
        Get in
        <span class="primary--text">Touch</span>
      </h1>
    </v-row>
    <v-row justify="center" align="center" class="mt-10">
      <v-timeline clipped>
        <!-- <v-timeline-item left class="mb-4 font-weight-bold" hide-dot>
          Email
        </v-timeline-item> -->
        <v-timeline-item left class="mb-4" small>
          <v-row justify="end">
            <v-btn
              class="contact-button text-lowercase"
              href="/what-i-do"
              elevation="4"
              rounded
            >
              <v-icon class="mr-2">fas fa-paper-plane</v-icon>
              writetosid@pm.me
            </v-btn>
          </v-row>
        </v-timeline-item>

        <!-- <v-timeline-item class="mb-4 font-weight-bold" hide-dot>
          LinkedIn
        </v-timeline-item> -->
        <v-timeline-item
          right
          class="mb-4"
          color="primary"
          icon-color="primary lighten-2"
          small
        >
          <v-row justify="space-between">
            <v-btn
              class="contact-button"
              href="/what-i-do"
              elevation="4"
              rounded
            >
              <v-icon class="mr-2">fab fa-linkedin</v-icon>
              Sidharth Sudarsan
            </v-btn>
          </v-row>
        </v-timeline-item>

        <!-- <v-timeline-item left class="mb-4 font-weight-bold" hide-dot>
          GitHub
        </v-timeline-item> -->
        <v-timeline-item left class="mb-4" small>
          <v-row justify="end">
            <v-btn
              class="contact-button text-lowercase"
              href="/what-i-do"
              elevation="4"
              rounded
            >
              <v-icon class="mr-2">fab fa-github</v-icon>
              @sidoverflow
            </v-btn>
          </v-row>
        </v-timeline-item>

        <!-- <v-timeline-item class="mb-4 font-weight-bold" hide-dot>
          Instagram
        </v-timeline-item> -->
        <v-timeline-item right class="mb-4" small>
          <v-row justify="space-between">
            <v-btn
              class="contact-button text-lowercase"
              href="/what-i-do"
              elevation="4"
              rounded
            >
              <v-icon class="mr-2">fab fa-instagram</v-icon>
              @sidoverflow
            </v-btn>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  // components: {
  //   Logo,
  //   VuetifyLogo,
  // },
}
</script>
