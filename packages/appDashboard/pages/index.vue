<template>
  <v-container
    id="data-tables"
    tag="section"
  >
    <base-material-card
      color="indigo"
      icon="upload"
      inline
      class="px-5 py-3"
    >
      <v-row>
        <v-col>
          <div class="d-flex flex-row-reverse">
            <v-btn
              :loading="loading"
              :disabled="loading"
              class="ma-2"
              color="success"
              @click="importToFirebase"
            >
              <v-icon left>mdi-pencil</v-icon> Import All
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </base-material-card>

  </v-container>
</template>

<script lang="ts" src="./index.ts"/>
