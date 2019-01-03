<template>
  <v-list two-line>
      <template v-for="(item, index) in items">
      <v-subheader
          v-if="item.header"
          :key="item.header"
      >
          {{ item.header }}
      </v-subheader>

      <v-divider
          v-else-if="item.divider"
          :inset="item.inset"
          :key="index"
      ></v-divider>

      <v-list-tile
          v-else
          :key="item.title"
          avatar
          @click='searchCategory(item.category)'
      >
          <v-list-tile-avatar>
            <v-icon v-text="item.avatar"></v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
          <v-list-tile-title v-html="item.title"></v-list-tile-title>
          <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
      </v-list-tile>
      </template>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { header: 'Κατηγορίες' },
        {
          avatar: 'location_city',
          title: 'Δημόσιες χρήσεις',
          subtitle: "<span class='text--primary'>Δημόσιες εξυπηρετήσεις</span>",
          category: 'public_poi',
        },
        { divider: true, inset: true },
        {
          avatar: 'timeline',
          title: 'Θεματικές Διαδρομές',
          subtitle: "<span class='text--primary'>Περιπατητικές, πολιτιστικές, θρησκευτικές διαδρομές</span>",
          category: 'thematic_routes',
        },
        { divider: true, inset: true },
        {
          avatar: 'directions_bus',
          title: 'Λεωφορεία',
          subtitle: "<span class='text--primary'>Στάσεις και διαδρομές</span>",
          category: 'bus_routes',
        },
        { divider: true, inset: true },
        {
          avatar: 'local_activity',
          title: 'Αρχαιολογικοί χώροι / Πολιτισμός',
          subtitle: "<span class='text--primary'>Πολιτιστικοί χώροι</span>",
          category: 'tourism_culture',
        },
        { divider: true, inset: true },
        {
          avatar: 'hotel',
          title: 'Τουρισμός',
          subtitle: "<span class='text--primary'>Ξενοδοχεία, φαγητό, έξοδος</span>",
          category: 'accomodation',
        },
        { divider: true, inset: true },
        {
          avatar: '360',
          title: 'Πανοράματα',
          subtitle: "<span class='text--primary'>Ξενάγηση με εικόνες 360 μοιρών</span>",
          category: 'panoramas',
        },
        { divider: true, inset: true },
        {
          avatar: 'pin_drop',
          title: 'Πολεοδομικές Ζώνες',
          subtitle: "<span class='text--primary'>Πολεοδομικές ζώνες</span>",
          category: 'planning_zones',
        },
      ],
    };
  },
  methods: {
    searchCategory(term) {
      console.log(term);
      // this.$eventHub.$emit('search', term);
    },
  },
};
</script>

<style>
</style>
