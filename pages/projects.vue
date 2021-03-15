<template>
  <div>
    <v-row justify="center" align="center" class="my-6">
      <!-- <v-spacer></v-spacer> -->
      <v-icon color="primary" large>fas fa-terminal</v-icon>
      <h1 class="font-weight-black pl-4">Projects</h1>
    </v-row>
    <v-row justify="center" align="center" class="mx-8">
      <v-timeline align-top dense>
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          color="primary"
          icon="fab fa-github"
          icon-color="#24292e"
          fill-dot
        >
          <v-card color="accent">
            <a :href="item.link" target="_blank" style="text-decoration: none">
              <v-card-title class="title white--text" v-text="item.title"></v-card-title>
            </a>
            <!-- eslint-disable-next-line -->
            <v-card-text class="mt-n4" v-html="item.description"> </v-card-text>
          </v-card>
          <v-row justify="end">
            <v-btn
              v-if="item.button"
              class="pa-4 mx-4 my-4"
              color="primary"
              href="https://www.youtube.com/watch?v=12ZhOhp3UWw&feature=youtu.be"
              target="_blank"
              rounded
              outlined
              >DEMO</v-btn
            >
            <v-card-actions v-for="(icon, ic) in item.icons" :key="ic">
              <v-icon class="mx-2" v-text="icon"></v-icon>
            </v-card-actions>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Aawaaz Portal',
        description:
          '<p>Built a minimal learning management system with a team of three people for a private tutoring company based in India. The system has essential features like assignment portal, grades management, file sharing and chat for ease of communication between students, teachers and admins of the institute. The system was built on <span class="font-italic white--text">Vue.js</span> with a <span class="font-italic white--text">Firebase</span> back-end utilizing <span class="font-italic">Firestore</span> and the <span class="font-italic">Cloud Functions</span> serverless framework. </p>',
        link: 'https://github.com/sidoverflow/VennEver',
        icons: ['fab fa-vuejs'],
      },
      {
        title: 'HoloAssist',
        description:
          '<p>A demo for an AR-based indoor navigation and visual cognition assistant for visually impaired people. Built for Microsoft <span class="font-italic white--text">HoloLens</span> with MRTK on <span class="font-italic white--text">Unity</span>. Uses <span class="font-italic white--text">Vuforia</span> for tracking and alignment. Person detection and OCR is implemented using <span class="font-italic white--text">Azure</span>\'s Computer Vision API. </p>',
        button: 'DEMO',
        link: 'https://github.com/sidoverflow/HoloAssist',
        icons: ['fab fa-microsoft', 'fab fa-unity'],
      },
      {
        title: 'VennEver',
        description:
          '<p>Developed a Venn Diagram-based desktop application with a team of four people over the course of a semester in a complete <span class="font-italic">Software Development Life Cycle</span>. The application allows the user to create and customize venn diagrams to visually represent various types of data sets. Built on <span class="font-italic white--text">Java</span> with the GUI library <span class="font-italic white--text">JavaFX</span>, build tool <span class="font-italic white--text">Gradle</span> and <span class="font-italic white--text">CircleCI</span> for CI/CD. Application is unit and function tested with <span class="font-italic white--text">JUnit</span>.</p>',
        link: 'https://github.com/sidoverflow/VennEver',
        icons: ['fab fa-java'],
      },
    ],
  }),
}
</script>
