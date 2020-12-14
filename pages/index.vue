<template>
  <div>
    <h1 class="font-weight-thin text-center mt-16">
      Hi, I'm
      <br />
      <span class="primary--text font-weight-black"
        >Sidharth <span class="white--text">Sudarsan.</span>
      </span>
    </h1>
    <v-row justify="center" align="center">
      <v-col align="right">
        <h2 class="font-weight-thin">
          <span class="primary--text">&lt;</span>SOFTWARE<span
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
        </p>
      </v-col>
      <v-col align="center">
        <img src="~/assets/main.png" width="85%" />
      </v-col>
      <v-col align="left">
        <h2 class="font-weight-thin">
          <span class="primary--text">~</span>REST OF ME<span
            class="primary--text"
            >~</span
          >
        </h2>
        <p class="text-body font-weight-regular text--disabled">
          I take pictures and make videos. <br />
          Hobbyist graphic designer. <br />
          Food enthusiast. <br />
          Petrolhead.<br />
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
        class="px-10 terminal text-h4 font-weight-black primary--text"
        href="/what-i-do"
        >>_
      </v-btn>
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
