<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app :width="500" sm-and-down>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
          <v-btn
            dark
            fab flat small
            color = 'grey'
            @click='drawer = false'
          >
            <v-icon>clear_all</v-icon>
          </v-btn>
        </v-list-tile>
      </v-list>
      <v-layout row wrap pa-2>
        <v-flex xs10 md10>
          <v-combobox
            v-model="searchTextTerm"
            :items="searchTermsDefault"
            label="Αναζήτηση οδού ή χρήσης"
            v-on:keyup.enter='searchText'
          ></v-combobox>
        </v-flex>
        <v-flex xs2 md2>
          <v-btn
            dark
            outline
            fab small
            color = 'blue'
            @click = 'searchText'
          >
            <v-icon>search</v-icon>
          </v-btn>
        </v-flex>
        <v-flex v-if="mode === 'search'">
          <recommendedCategories></recommendedCategories>
        </v-flex>
        <v-flex v-if="mode === 'results'">
          <!-- <searchResults :term='searchTerm' ></searchResults> -->
        </v-flex>
        <v-flex xs12>
          <v-btn
            dark
            block
            :color = 'btncolor'
            @click="setMapMode('mbtilemap')"
          >
          <v-icon>map</v-icon>Χάρτης
          </v-btn>
          <v-btn
            dark
            block
            :color = 'btncolor'
            @click="setMapMode('planningMap')"
          >
          <v-icon>map</v-icon>Πολεοδομικός Χάρτης
          </v-btn>
          <v-btn
            block
            dark
            :color = 'btncolor'
            @click="setMapMode('bing')"
          >
          <v-icon>satellite</v-icon>Δορυφορική
          </v-btn>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ placeName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <!-- <router-view/> -->
      <OlMap></OlMap>
    </v-content>
    <v-footer app>
      <span class="pa-2">Terra Cognita &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
// import mapModeControls from '@/components/mapModeControls';
import RecommendedCategories from './components/RecommendedCategories.vue';
// import searchResults from '@/components/searchResults';
import OlMap from './components/OlMap.vue';

export default {
  data() {
    return {
      btncolor: 'red',
      drawer: true,
      items: [{
        icon: 'home',
        title: 'Αποτελέσματα αναζήτησης',
      }],
      title: 'Cartoguide',
      searchTermsDefault: [
        'Δημαρχείο',
        'Σχολείο',
        'Ιατρικό κέντρο',
        'Πάρκο',
      ],
      searchTerm: null,
      searchTextTerm: null,
      select: null,
      mode: 'search',
      placeName: null,
    };
  },
  name: 'Cartoguide',
  components: {
    OlMap,
    RecommendedCategories,
    // mapModeControls, recommendedCategories, searchResults,
  },
  methods: {
    setMode(mode) {
      this.mode = mode;
    },
    searchText() {
      this.setMode('search');
      console.log('search in app vue:: ', this.searchTextTerm);
      this.setMode('results');
      this.searchTerm = { mode: 'text', term: this.searchTextTerm };
    },
  },
  created() {
    // console.info('App currentRoute:', this.$router.currentRoute);
    if (this.$router.currentRoute.fullPath !== '/') {
      this.$store.commit('setPlace', this.$router.currentRoute.params.place);
    }
    // this.$eventHub.$on('search', (term) => {
    //   this.setMode('results');
    //   this.searchTerm = term;
    // });
    // this.$eventHub.$on('closeResults', () => {
    //   this.setMode('search');
    // });
  },
};
</script>
<style lang="scss">
</style>
