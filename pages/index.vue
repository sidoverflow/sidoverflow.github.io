<template>
  <div>
    <h1 v-if="!$vuetify.breakpoint.mobile" class="font-weight-thin text-center mt-16">
      {{ greeting }}
      <br />
      <span v-if="isMalayalam" class="primary--text font-weight-black malayalam-name"
        >{{ firstName }} <span class="white--text">{{ lastName }}</span>
      </span>
      <span v-else class="primary--text font-weight-black"
        >{{ firstName }} <span class="white--text">{{ lastName }}</span>
      </span>
    </h1>
    <h1 v-else class="font-weight-thin text-center mt-4">
      {{ greeting }}
      <br />
      <span v-if="isMalayalam" class="primary--text font-weight-black malayalam-name"
        >{{ firstName }} <span class="white--text">{{ lastName }}</span>
      </span>
      <span v-else class="primary--text font-weight-black"
        >{{ firstName }} <span class="white--text">{{ lastName }}</span>
      </span>
    </h1>
    <v-row justify="center" align="center">
      <v-col align="right" cols="12" md="4" class="pt-4 pr-6">
        <h2 class="font-weight-thin">
          <span class="primary--text">&lt;</span>COMPUTERS<span class="primary--text">&gt;</span>
        </h2>
        <p class="text-body font-weight-regular text--disabled">
          Aspiring <span class="primary--text">software engineer.</span><br />
          Admirer of <span class="font-italic">clean</span> software design.<br />
          Fascinated by math.<br />
          FOSS enthusiast.<br />
        </p>
      </v-col>
      <v-col align="center" cols="12" md="4" class="px-6">
        <img class="lazyload" src="~/assets/main.webp" width="100%" />
      </v-col>
      <v-col align="left" cols="12" md="4" class="pl-6">
        <h2 class="font-weight-thin"><span class="primary--text">~</span>AND?<span class="primary--text">~</span></h2>
        <p class="text-body font-weight-regular text--disabled">
          Love photo, film and music. <br />
          Food enthusiast. <br />
          Petrolhead. <br />
          Fan of <span class="font-italic">The Beautiful Game</span>.
          <v-avatar tile :size="13"><img src="~/assets/fcb.webp" /></v-avatar>
          <br />
        </p>
      </v-col>
    </v-row>
    <v-row v-if="!$vuetify.breakpoint.mobile" justify="center" align="center" class="mt-16">
      <!-- <h1 class="terminal font-weight-black">>_</h1> -->
      <v-btn elevation="2" x-large rounded fab class="px-10 text-h4 font-weight-black primary--text" to="/what-i-do"
        >>
      </v-btn>
    </v-row>
    <v-row v-else justify="center" align="center" class="mb-2">
      <!-- <h1 class="terminal font-weight-black">>_</h1> -->
      <v-btn elevation="2" x-large rounded fab class="px-10 text-h4 font-weight-black primary--text" to="/what-i-do"
        >>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: "Hi, I'm",
      firstName: 'Sidharth',
      lastName: 'Sudarsan',
      isMalayalam: false,
    }
  },
  mounted() {
    window.setInterval(() => {
      this.toggle()
    }, 3000)
  },
  methods: {
    toggle() {
      if (this.firstName === 'Sidharth' && this.lastName === 'Sudarsan') {
        this.greeting = 'നമസ്കാരം, ഞാൻ'
        this.firstName = 'സിദ്ധാർഥ്'
        this.lastName = 'സുദർശൻ'
        this.isMalayalam = true
      } else {
        this.greeting = "Hi, I'm"
        this.firstName = 'Sidharth'
        this.lastName = 'Sudarsan'
        this.isMalayalam = false
      }
    },
  },
}
</script>
