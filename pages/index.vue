<template>
  <div>
    <h1 class="font-weight-thin text-center mt-16">
      {{ greeting }}
      <br />
      <span
        v-if="isMalayalam"
        class="primary--text font-weight-black malayalam-name"
        >{{ firstName }} <span class="white--text">{{ lastName }}</span>
      </span>
      <span v-else class="primary--text font-weight-black"
        >{{ firstName }} <span class="white--text">{{ lastName }}</span>
      </span>
    </h1>
    <v-row justify="center" align="center">
      <v-col align="right">
        <h2 class="font-weight-thin">
          <span class="primary--text">&lt;</span>COMPUTERS<span
            class="primary--text"
            >&gt;</span
          >
        </h2>
        <p class="text-body font-weight-regular text--disabled">
          Aspiring <span class="primary--text">software engineer.</span><br />
          Admirer of <span class="font-italic">clean</span> software design.<br />
          Into <span class="white--text">AR</span> and
          <span class="white--text">server-side development.</span>
          <br />
          Fascinated by math.<br />
          FOSS enthusiast.<br />
        </p>
      </v-col>
      <v-col align="center">
        <img class="lazyload" src="~/assets/main.png" width="85%" />
      </v-col>
      <v-col align="left">
        <h2 class="font-weight-thin">
          <span class="primary--text">~</span>AND?<span class="primary--text"
            >~</span
          >
        </h2>
        <p class="text-body font-weight-regular text--disabled">
          Love photo and film. <br />
          Music addict. <br />
          Food enthusiast. <br />
          Into cars and motorcycles. <br />
          Fan of <span class="font-italic">The Beautiful Game</span>. <br />
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-16">
      <!-- <h1 class="terminal font-weight-black">>_</h1> -->
      <v-btn
        elevation="2"
        x-large
        rounded
        fab
        class="px-10 text-h4 font-weight-black primary--text"
        href="/what-i-do"
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
    }, 4500)
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
