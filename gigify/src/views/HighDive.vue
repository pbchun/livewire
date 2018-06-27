<template>
  <div class="high-dive">
    <header>
      <h1>Welcome to The Hi-Dive</h1>
    </header>
    <EventSection :testing="proptest()" />
    <VenueFooter />
  </div>
</template>

<script>
import VenueFooter from "@/components/VenueFooter";
import EventSection from "@/components/EventSection";

export default {
  name: "high-dive",
  components: {
    VenueFooter,
    EventSection
  },
  data() {
    return {
      API: {
        DATE_LISTINGS: "https://whispering-plains-35500.herokuapp.com/events",
        APPROVED_SHOWS: "https://arcane-chamber-96667.herokuapp.com/events",
        REQUESTED_SHOWS: "https://pure-taiga-70535.herokuapp.com/events"
      }
    };
  },
  methods: {
    proptest() {
      console.log(this.API.DATE_LISTINGS);
    }
  }
};
</script>

<style>
</style>