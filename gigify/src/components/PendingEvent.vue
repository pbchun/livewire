<template>
    <section class="available-dates">
            <PendingCard class="pendingCard" v-for="event in eventData[2].events" v-bind:key="event.artist" :pendingEvent="event" :API="API" />
    </section>
</template>

<script>
import PendingCard from "@/components/PendingCard";

export default {
  name: "pending-event",
components: {
    PendingCard
},
  data() {
    return {
      eventData: [],
      API: {
        DATE_LISTINGS: "https://whispering-plains-35500.herokuapp.com/events",
        APPROVED_SHOWS: "https://arcane-chamber-96667.herokuapp.com/events",
        REQUESTED_SHOWS: "https://pure-taiga-70535.herokuapp.com/events"
      }
    };
  },

  async mounted() {
    Promise.all([
      fetch(this.API.DATE_LISTINGS).then(res => res.json()),

      fetch(this.API.APPROVED_SHOWS).then(res => res.json()),

      fetch(this.API.REQUESTED_SHOWS).then(res => res.json())
    ]).then(res => {
      this.eventData = res;
      console.log(this.eventData);
    });
  }
};
</script>

<style>
.mainInfo {
    font-size: 30px;
    width: 300px;
}
img {
    max-height: 100px;
    margin-bottom: 10px;
}
.available-dates {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.pendingCard {
  margin: 20px;;
}
section {
    line-height: 10px
}
</style>