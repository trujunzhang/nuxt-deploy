<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-badge
        content="5"
        value="5"
        color="green"
        overlap
      >
        <v-icon large>mdi-email</v-icon>
      </v-badge>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'DashboardDashboard',
  components: {

  },
  data () {
    return {
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  },

  methods: {
    complete (index) {
      this.list[index] = !this.list[index]
    }
  }
}
</script>
