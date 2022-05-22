<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-title>General-Utility-Nerima-Disaster-App-of-Map</v-app-bar-title>
      <v-spacer />
      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon to="/about">
        <v-icon>mdi-information</v-icon>
      </v-btn>
      <v-btn icon to="/link">
        <v-icon>mdi-link</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>