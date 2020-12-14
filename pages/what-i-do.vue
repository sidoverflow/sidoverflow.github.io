<template>
  <div>
    <v-row justify="center" align="center" class="mt-4">
      <!-- <v-spacer></v-spacer> -->
      <v-icon large>fas fa-code-branch</v-icon>
      <h1 class="font-weight-black pl-4">
        What I
        <span class="primary--text">Do</span>
      </h1>

      <!-- <v-spacer></v-spacer> -->
    </v-row>
    <v-row justify="center" align="center">
      <v-btn
        href="https://registry.jsonresume.org/sidoverflow"
        target="_blank"
        color="primary"
        rounded
        outlined
        class="ml-16"
        >Resume (Web)</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn
        class="mr-16"
        href="/resume.pdf"
        download
        color="primary"
        rounded
        outlined
        >Resume (PDF)</v-btn
      >
    </v-row>

    <v-row justify="center">
      <div id="timeline-content">
        <ul class="timeline">
          <li class="event" data-date="September 2018 - present">
            <h3>
              Lassonde School of Engineering |
              <span class="font-weight-regular">York University</span>
            </h3>
            <p class="primary--text font-italic">Software Engineering, B.Eng</p>
            <div class="logo-collection">
              <img src="~/assets/lasyork_edited.png" width="70%" />
            </div>
          </li>
          <li class="event" data-date="April 2020 - present">
            <h3>
              Augmented Urban Space Modeling Lab |
              <span class="font-weight-regular">York University</span>
            </h3>
            <p class="primary--text font-italic">Research Assistant</p>
            <p>
              Carrying out research in the Intelligent Systems for Sustainable
              Urban Mobility (ISSUM) project under
              <span class="font-italic">Dr. Gunho Sohn.</span>
              <br />
              <br />
              Developing an Augmented Reality-based indoor navigation and visual
              cognition assistant for the visually impaired. <br />
              <br />
              Built using Microsoft's HoloLens and Mixed Reality Toolkit on
              Unity game engine. <br />
              <br />
              Utilized 3D models and spatial scans of the campus environment.
              <br />
              <br />
              Also built the interface for a 3D virtual environment made on
              Cesium.js using 3D and BIM models.
            </p>
          </li>
          <li class="event" data-date="August 2020 - present">
            <a href="https://www.drcar.ca" style="text-decoration: none"
              ><h3 class="white--text">Dr Car</h3></a
            >
            <p class="primary--text font-italic">
              Co-founder and Back-end Engineer
            </p>
            <p>
              Co-founded a startup with a team of seven, reinventing how car
              owners book, service, and track their car repairs driven by a deep
              rooted desire to address the hassle associated with car care and
              servicing.
              <br />
              <br />
              Designing and building the back-end server for the application.
            </p>
            <div class="logo-collection">
              <img src="~/assets/dr-car.png" width="30%" />
            </div>
          </li>
        </ul>
      </div>
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
