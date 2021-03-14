<template>
  <div>
    <v-row justify="center" align="center" class="mt-4">
      <v-icon large>fas fa-hands-helping</v-icon>
      <h1 class="font-weight-black pl-4">
        Get in
        <span class="primary--text">Touch</span>
      </h1>
    </v-row>
    <v-row justify="center" align="center" class="mt-6">
      <v-timeline dense>
        <!--Email-->
        <v-timeline-item left class="mb-4" small>
          <v-row justify="end">
            <v-btn class="contact-button text-lowercase" href="mailto:hi@sidharth.me" elevation="4" rounded>
              <v-icon class="mr-2">fas fa-paper-plane</v-icon>
              hi@sidharth.me
            </v-btn>
          </v-row>
        </v-timeline-item>

        <!--Matrix-->
        <v-timeline-item left class="mb-4" small>
          <v-row justify="end">
            <v-btn
              class="contact-button text-lowercase"
              href="https://matrix.to/#/@writetosid:matrix.org"
              elevation="4"
              rounded
            >
              <v-icon class="mr-2">fas fa-comment</v-icon>
              @writetosid
            </v-btn>
          </v-row>
        </v-timeline-item>

        <!--Github-->
        <v-timeline-item left class="mb-4" small>
          <v-row justify="end">
            <v-btn class="contact-button text-lowercase" href="https://github.com/sidoverflow" elevation="4" rounded>
              <v-icon class="mr-2">fab fa-github</v-icon>
              @sidoverflow
            </v-btn>
          </v-row>
        </v-timeline-item>

        <!--LinkedIn-->
        <v-timeline-item right class="mb-4" color="primary" icon-color="primary lighten-2" small>
          <v-row justify="space-between">
            <v-btn
              class="contact-button text-lowercase"
              href="https://linkedin.com/in/sidharthsudarsan"
              elevation="4"
              rounded
            >
              <v-icon class="mr-2">fab fa-linkedin</v-icon>
              /in/sidharthsudarsan
            </v-btn>
          </v-row>
        </v-timeline-item>

        <!-- <v-timeline-item class="mb-4 font-weight-bold" hide-dot>
          Instagram
        </v-timeline-item> -->
        <!-- <v-timeline-item right class="mb-4" small>
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
        </v-timeline-item> -->
      </v-timeline>
    </v-row>
    <v-row justify="center" align="center" class="pt-6 px-6 mt-8">
      <h4 class="font-weight-regular my-4 text-center">
        If you encrypt email using GPG,
        <a href="/sidharth-pubkey.asc">download</a> my public key or:
      </h4>
    </v-row>
    <v-row justify="center" align="center" class="pt-2 px-6">
      <code class="code-js text-center"
        ><span class="primary--text">curl</span>
        https://sidharth.me/sidharth-pubkey.asc |
        <span class="primary--text">gpg</span> --import</code
      >
      <v-btn class="copy-code-js ma-2" fab x-small elevation="4">
        <v-icon class="pa-2">far fa-copy</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  mounted() {
    const copyCodeButton = document.querySelector('.copy-code-js')
    copyCodeButton.addEventListener('click', function (event) {
      // Select the email link anchor text
      const codeLink = document.querySelector('.code-js')
      const range = document.createRange()
      range.selectNode(codeLink)
      window.getSelection().addRange(range)

      // Now that we've selected the anchor text, execute the copy command
      document.execCommand('copy')

      // Remove the selections
      window.getSelection().removeAllRanges()
    })
  },
}
</script>
