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
        class="mt-4 mx-4"
        target="_blank"
        color="primary"
        rounded
        outlined
        >Resume (Web)</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn href="/resume.pdf" download color="primary" class="mx-4 mt-4" rounded outlined>Resume (PDF)</v-btn>
    </v-row>

    <v-row justify="center" align="center">
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
              Carrying out research in the Intelligent Systems for Sustainable Urban Mobility (ISSUM) project under
              <span class="font-italic">Dr. Gunho Sohn.</span>
              <br />
              <br />
              Developed an MVP for an AR-based indoor navigation and visual cognition assistant for the visually
              impaired — HoloAssist. <br />
              <br />
              Built on Microsoft HoloLens using the Mixed Reality Toolkit and the Unity game engine, 3D models and
              spatial scans of the campus environment were utilized. <br />
              <br />
              Currently developing a crowd simulator for the YorkU campus for research on pedestrian comfort analysis
              and effective social distancing protocols.
            </p>
          </li>
          <li class="event" data-date="August 2020 - March 2021">
            <a href="https://www.drcar.ca" style="text-decoration: none"><h3 class="white--text">Dr Car</h3></a>
            <p class="primary--text font-italic">Back-end Engineer</p>
            <p>
              Worked on a startup with a team of seven, reinventing how car owners book, service, and track their car
              repairs driven by a deep rooted desire to address the hassle associated with car care and servicing.
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
export default {}
</script>
