<template>
  <v-container
    id="data-tables"
    tag="section"
  >
    <base-material-card
      color="indigo"
      icon="photo"
      inline
      class="px-5 py-3"
    >
      <template #after-heading>
        <div class="display-2 font-weight-light">
          Photo
        </div>
      </template>

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
              <v-icon left>mdi-pencil</v-icon> Import
            </v-btn>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              hide-details
              single-line
              style="max-width: 250px;"
            />
          </div>
        </v-col>
      </v-row>

      <v-divider class="mt-3" />

      <v-data-table
        :headers="headers"
        :items="items"
        :search.sync="search"
        :sort-by="['name', 'office']"
        :sort-desc="[false, true]"
        multi-sort
      />
    </base-material-card>
  </v-container>
</template>

<script lang="ts" src="./photo.ts"/>
