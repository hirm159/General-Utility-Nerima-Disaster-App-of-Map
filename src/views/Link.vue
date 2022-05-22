<template>
  <v-container>
    <v-row class="text-center" dense no-gutters>
      <v-col>
          <h1>Link</h1>
      </v-col>
    </v-row>
    <v-row justify="center" dense no-gutters>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    URL
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in links"
                    :key="item.name"
                >
                <td>{{ item.name }}</td>
                <td><a target="_blank" :href="item.url">{{ item.url }}</a></td>
                </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        links: [],
      }
    },
    methods: {
      getLinks() {
        const rootPath = 'http://localhost:8080/'
        const path = rootPath + 'link/init'
        axios.get(path)
          .then(response => {
            this.links = response.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    created() {
      this.getLinks()
    }
  }
</script>