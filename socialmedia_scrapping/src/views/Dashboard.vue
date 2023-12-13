<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer"
        class="bg-deep-purple"
        theme="dark"
        permanent
      >
        <v-list color="transparent">
          <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Demo Dashboard</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>Table</v-card-title>
              <v-card-text>
                <v-data-table
                  :headers="headers"
                  :items="plants"
                  item-key="name"
                ></v-data-table>
              </v-card-text>
              {{ test }}
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'Home', icon: 'mdi-home' },
      { title: 'About', icon: 'mdi-help-box' },
    ],
    headers: [
      { title: 'URL', align: 'start', sortable: false, key: 'url' },
      { title: 'Likes', align: 'end', key: 'likes' },
      { title: 'Comment', align: 'end', key: 'comment' },
      { title: 'Bookmark', align: 'end', key: 'bookmark' },
      { title: 'Share', align: 'end', key: 'share' },
    ],
    plants: [],
    test:"",
  }),
  created() {
    this.property = 'Example property update.'
    this.pulldata();

    },
  methods:{
     async pulldata() {
      console.log('propertyComputed will update, as this.property is now reactive.')
      const response = await axios.get('http://localhost:3001/scrape');
      // console.log(response.data);
      this.plants = response.data;
      this.plants = [
        {
          url: 'https://www.tiktok.com/@drbotak.goh/video/7042086099157617947',
          likes: '90',
          comment: '17',
          bookmark: '0',
          share: '4'
        },
      ]
      console.log(this.plants)
      this.test = "dsadsa"
    }
  }
}
</script>