<template>
  <div class="high-dive">
    <Header /> 
    <header>
      <h1 id="live-at">Live at The Hi-Dive</h1>
    </header>
    <EventSection :modalShow="modalShow" :clickedEvent="clickedEvent" :populateModal="populateModal" :eventData="eventData" />
    <div>
     <VenueFooter />
    </div>
  </div>
</template>

<script>
import VenueFooter from "@/components/VenueFooter";
import EventSection from "@/components/EventSection";
import Header from "@/components/Header";

export default {
  name: "high-dive",
  components: {
    VenueFooter,
    EventSection,
    Header
  },
  data() {
    return {
      modalShow: false,
      clickedEvent: {},
      eventData: [],
      API: {
        DATE_LISTINGS: "https://whispering-plains-35500.herokuapp.com/events",
        APPROVED_SHOWS: "https://arcane-chamber-96667.herokuapp.com/events",
        REQUESTED_SHOWS: "https://pure-taiga-70535.herokuapp.com/events"
      }
    };
  },
  methods: {
    populateModal(clickedEvent) {
      this.modalShow = !this.modalShow;
      this.clickedEvent = clickedEvent;
      console.log(clickedEvent);
    }
  },
  async mounted() {
    Promise.all([
      fetch(this.API.DATE_LISTINGS).then(res => res.json()),

      fetch(this.API.APPROVED_SHOWS).then(res => res.json()),

      fetch(this.API.REQUESTED_SHOWS).then(res => res.json())
    ]).then(res => {
      this.eventData = res;
    });
  }
};
</script>

<style>
@media only screen and (max-width: 600px) {
  #live-at {
    letter-spacing: 0.08em;
  }
}
.high-dive {
  font-family: "Pathway Gothic One", sans-serif;
}
</style>