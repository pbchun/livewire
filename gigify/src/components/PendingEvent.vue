<template>
    <section class="available-dates">
        <div class="available-date-cards" >
            <PendingCard v-for="event in eventData[2].events" v-bind:key="event.artist" :pendingEvent="event" />
        </div>
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

      acceptedEvent: {
          "date":"",
          "venue":"Hi-Dive",
          "artist":"",
          "image":"",
          "description":""
      },
      API: {
        DATE_LISTINGS: "https://whispering-plains-35500.herokuapp.com/events",
        APPROVED_SHOWS: "https://arcane-chamber-96667.herokuapp.com/events",
        REQUESTED_SHOWS: "https://pure-taiga-70535.herokuapp.com/events"
      }
    };
  },
  methods: {
        submitRequest() {
      // this.addRequest(this.request);
      console.log(this.API.APPROVED_SHOWS)
      this.acceptedEvent = this.eventData[2].events.indexOf(event);
      console.log(this.eventData[2].events.indexOf(event))
      this.postEvent();
    },
    postEvent() {
      const postOptions = {
        method: 'POST',
        body: JSON.stringify(this.acceptedEvent),
        headers: {'Content-Type':'application/json'}
      }
      fetch(this.API.APPROVED_SHOWS, postOptions)
        .then(res => res.json())
        .then(resJSON => console.log(resJSON))

    }
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
}
.available-dates {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 70%;
}
.available-date-cards {
  margin: auto;
  margin-top: 3vh;
  padding-bottom: 2vh;
  padding-left: 2vh;
  padding-right: 2vh;
}
</style>