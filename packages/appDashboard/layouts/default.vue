<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import DashboardCoreAppBar from '~/components/core/AppBar.vue'
import DashboardCoreDrawer from '~/components/core/Drawer.vue'
import DashboardCoreView from '~/components/core/View.vue'

@Component({
  components: {
    DashboardCoreAppBar,
    DashboardCoreDrawer,
    DashboardCoreView
  }
})
export default class extends Vue {
}

</script>
